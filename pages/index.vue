<script setup>
import { ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate';
import { configure } from 'vee-validate';

configure({
  validateOnBlur: false,
  validateOnChange: false,
  validateOnInput: false,
  validateOnModelUpdate: false,
});

const submitted = ref(false);

function countWords(str) {
  return str.trim().split(/\s+/).length;
}

function validateForm(value) {
  if (!value) {

    return 'You missed something here*';
  }

  return true;
}

function validateWords(value) {

  const regex = /^(?:\b\w+\b[\s\r\n\.\,\?\!]*){0,20}$/i;
  let ct = 0;
  if (value) {
    ct = value.trim().split(/\s+/).length;
  }
  document.getElementById('ct').innerHTML = ct;

  document.getElementById('ct').classList.remove("text-pred");

  if (!regex.test(value)) {
    document.getElementById('ct').classList.add("text-pred");;
    return ' ';
  }

  if (!value) {
    return 'You missed something here*';
  }
  return true;
}

async function onSubmit(values) {
  submitted.value = true;
  const { body } = await $fetch('/api/store', {
    method: 'post',
    body: { data: values }
  })
}

</script>

<template>
  <div>
    <div class="text-center mx-auto grid grid-cols-1 gap-2 md:grid-cols-2 mb-8 md:mt-20">
      <div class="mx-auto mx-6 md:w-4/5">
        <div class="mx-8 md:mx-0 w-2/5 md:w-full">
          <div class="mt-4 flex align-items">
            <div class="md:w-1/2 md:mr-8">
              <img src="/logos.png" />
            </div>
            <div class="md:w-1/2">
              <div class="md:w-3/5 mt-2">
                <img src="/MessageInABottle_CampaignLogo.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="mx-8 md:mx-0 mb-4">
          <h1 class="pt-7 md:pt-4 md:px-0 md:text-left large-head">
            <span class="text-porange">Share your message</span> in a bottle
          </h1>
          <h2 class="mt-5 mb-2 md:px-0 text-white md:text-left leading-7">
            CDS Vic is turning one and celebrating with a 'Message in a Bottle' exhibition that showcases the lifecycle
            of a plastic bottle and the importance of recycling.
          </h2>
          <p
            class="leading-relaxed text-xs reading md:text-left border-b border-solid border-plightblue text-plightblue pb-3 mb-3">
            If you are a primary school student in Victoria, you can be part of the installation. By submitting the
            form, you have the chance to have your message included in a bottle for visitors at Scienceworks to see
            during the exhibition from 1 November 2024 to 27 January 2025.
          </p>
          <h2 class="text-lg mt-5 mb-2  md:px-0 text-white text-sm md:text-left leading-6">Are you a teacher or
            educator?</h2>
          <p class="text-xs leading-relaxed reading md:text-left text-plightblue mb-3">
            We've created handy classroom activities and lesson plans so your students can learn about recycling and
            partake in our Message in a Bottle installation.
          </p>
          <div class="md:text-left md:w-3/5">
            <button class="btn bg-pmint"><a href="/Lesson_Plans.pdf">Classroom lesson plans</a></button>
            <button class="btn bg-white"><a href="/Activity_worksheets.pdf">Student activity worksheets</a></button>
          </div>
        </div>
      </div>
      <!-- panel right -->
      <div class="mx-8 md:w-4/5">
        <div class="bg-white rounded-xl p-8 mb-4 grid grid-cols-1">
          <div v-show="submitted" class="flex flex-col items-center justify-center">
            <div class="bg-porange p-4 mb-4 w-28 h-28 rounded-full flex justify-center">
              <img class="w-4/5" src="/Icon-tick.svg" />
            </div>

            <div class="w-2/3">
              <h2 class="text-pblue large-head mb-4">WE'VE RECEIVED YOUR MESSAGE!</h2>

              <p class="text-pblue">Visit Scienceworks from November to see if our installation features your message.
              </p>
            </div>
          </div>
          <div v-show="!submitted">
            <Form @submit="onSubmit" class="uppercase" v-slot="{ errors }">
              <div class="my3">
                <!-- <div class="grid grid-cols-2 my-3 gap-2"> -->
                <div class="text-left">
                  <label for="name" class="text-sm block">First Name &ast;</label>
                  <Field name="name" type="text" :rules="validateForm" class="rounded p-1 w-full" />
                </div>
                <!-- <div class="text-left">
            <label class="text-sm block" for="year">Year Level &ast;</label>
            <Field name="year" type="text" :rules="validateForm" class="rounded p-1 w-full" />
	  </div> -->
              </div>
              <div class="my-3">
                <label class="text-left text-sm block" for="school">School Name &ast;</label>
                <Field type="text" name="school" :rules="validateForm" id="school" class="w-full rounded p-1" />
              </div>
              <!-- <div class="my-3">
          <label class="text-left text-sm block" for="teacher">Teacher Name &ast;</label>
          <Field type="text" name="teacher" :rules="validateForm" id="teacher" class="w-full rounded" />
	</div> -->
              <div class="my-3">
                <label class="text-left text-sm block" for="message">Tell us in 20 words or less: Why is recycling
                  important to you? </label>
                <Field as="textarea" name="message" :rules="validateWords" id="message" rows="8"
                  class="w-full rounded" />
              </div>
              <div class="grid grid-cols-2 my-3 gap-2">
                <div class="text-left">
                  <template v-if="Object.keys(errors).length">
                    <div class="text-xs text-pred normal-case"> {{ Object.values(errors)[0] }}</div>
                  </template>
                </div>
                <div class="text-xs text-grey normal-case text-right"><span id="ct">0</span>/20</div>
              </div>
              <div class="terms my-3 text-xs text-tblue normal-case">CDS Vic is collecting this information for the
                Message in a
                Bottle exhibition. This information will be managed under CDS Vic's <a
                  href="https://cdsvic.org.au/privacy-policy" target="_blank">Privacy Policy</a> and <a
                  href="https://cdsvic.org.au/terms-and-conditions" target="_blank">Terms
                  and Conditions</a>. For further info contact <a
                  href="mailto:info@vicreturn.com.au">info@vicreturn.com.au</a>.</div>
              <div class="mt3">
                <Field v-slot="{ field }" name="terms" type="checkbox" :value="true" :rules="validateForm"
                  :unchecked-value="false">
                  <label>
                    <input type="checkbox" name="terms" v-bind="field" :value="true" />
                    A parent, guardian or teacher from the above school has supervised the submission.
                  </label>
                </Field>
              </div>
              <div class="mt-2"><button class="btn btn-pblue">submit</button></div>
            </Form>
          </div>
        </div><!-- end inner -->
      </div>
      <!-- end panel -->
    </div>
  </div>
</template>
