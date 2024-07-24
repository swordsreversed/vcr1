<script setup>
import { ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate';

const { data: data } = await useFetch('/api/test')

const submitted = ref(false);

function onSubmitX(values) {
  console.log(JSON.stringify(values, null, 2));
}

function validateForm(value) {
  // if the field is empty
  if (!value) {
    return 'You missed something here*';
  }

  // All is good
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
  <div class="text-center mx-auto grid grid-cols-1 gap-2 md:grid-cols-2 mb-8 md:mt-12">
    <div class="mx-auto bmb-8 md:w-2/3">
      <div class="mx-auto md:mx-0 mt-5 md:w-2/3">
        <img src="/logos.svg" />
      </div>

      <h1 class="pt-7 px-8 md:px-0 md:text-left large-head">
        <span class="text-porange">Share your message</span> in a bottle
      </h1>
      <p class="my-5 reading my-2 px-8 md:px-0 text-white text-sm md:text-left text-base/7">
        Tell us why you care for our planet and have your message displayed from November 2024 and through the summer
        school holidays at Scienceworks.
      </p>

      <div class="md:text-left md:w-4/5">
        <button class=" btn bg-pmint">Sign up for newsletter</button>
        <button class="btn bg-white">Learn more about</button>
      </div>

    </div>
    <div class="md:w-3/5 bg-white rounded-xl p-8 mb-4 grid grid-cols-1">
      
	<div v-show="submitted" class="flex flex-col items-center justify-center">
    	 <div class="bg-porange p-4 mb-4 w-28 h-28 rounded-full flex justify-center">
		 <img class="w-4/5" src="/Icon-tick.svg" />
	 </div>

	 <div class="w-3/5">
    <h2 class="text-pblue large-head mb-4">WE'VE RECEIVED YOUR MESSAGE!</h2>

    <p>Look out for your message to be displayed at Scienceworks in November</p>
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
          <Field type="text" name="school" :rules="validateForm" id="school" class="w-full rounded" />
        </div>
        <!-- <div class="my-3">
          <label class="text-left text-sm block" for="teacher">Teacher Name &ast;</label>
          <Field type="text" name="teacher" :rules="validateForm" id="teacher" class="w-full rounded" />
	</div> -->
        <div class="my-3">
          <label class="text-left text-sm block" for="message">Tell us in 15 words or less recycling is important to me because...&ast;</label>
          <Field as="textarea" name="message" :rules="validateForm" id="message" rows="8" class="w-full rounded" />
        </div>
        <div class="text-left">
		    <template v-if="Object.keys(errors).length">
			    <div class="text-xs text-pred normal-case"> {{ Object.values(errors)[0] }}</div>
  </template>
        </div>
	<div class="my-3 text-xs">CDS Vic is collecting this information for the Message in a Bottle exhibition. This information will be managed under CDS Vic's <a href="" target="_blank">Privacy Policy</a> and <a href="" target="_blank">Terms and Conditions</a>. For further info contact <a href="mailto:info@vicreturn.com.au">info@vicreturn.com.au</a>.</div>
	<div class="mt3">
	<Field v-slot="{ field }" name="terms" type="checkbox" :value="true" :unchecked-value="false">
  <label>
    <input type="checkbox" name="terms" v-bind="field" :value="true" />
    A teacher from the above school has supervised this submission.

  </label>
</Field>
	</div>
        <div class="mt-2"><button class="btn btn-pblue">submit</button></div>
      </Form>
	</div>
    </div>
  </div>
</template>
