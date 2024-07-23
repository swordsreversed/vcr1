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
  <div class="text-center mx-6 grid grid-cols-1 gap-2 md:grid-cols-2 mb-8 md:mt-12">
    <div class="mb-8 md:w-2/3">
      <div class="mx-auto md:mx-0 mt-5 md:w-2/3">
        <img src="/logos.svg" />
      </div>

      <h1 class="pt-7 px-8 md:px-0 md:text-left large-head">
        <span class="text-porange">Celebrating 1 Year</span> of Victoria's
        Container Deposit Scheme
      </h1>
      <p class="my-5 reading my-2 px-8 md:px-0 text-white text-sm md:text-left text-base/7">
        Tell us why you care for our planet and have your message displayed from November 2024 and through the summer
        school holidays at Scienceworks.
      </p>

      <div class="md:text-left w-4/5">
        <button class=" btn bg-pmint">Sign up for newsletter</button>
        <button class="btn bg-white">Learn more about</button>
      </div>

    </div>
    <div class="bg-white rounded-xl p-8 mb-4 grid grid-cols-1">
      
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
        <div class="grid grid-cols-2 my-3 gap-2">
          <div class="text-left">
            <label for="name" class="text-sm block">First Name &ast;</label>
            <Field name="name" type="text" :rules="validateForm" class="rounded p-1 w-full" />
          </div>
          <div class="text-left">
            <label class="text-sm block" for="year">Year Level &ast;</label>
            <Field name="year" type="text" :rules="validateForm" class="rounded p-1 w-full" />
          </div>
        </div>
        <div class="my-3">
          <label class="text-left text-sm block" for="school">School Name &ast;</label>
          <Field type="text" name="school" :rules="validateForm" id="school" class="w-full rounded" />
        </div>
        <div class="my-3">
          <label class="text-left text-sm block" for="teacher">Teacher Name &ast;</label>
          <Field type="text" name="teacher" :rules="validateForm" id="teacher" class="w-full rounded" />
        </div>
        <div class="mt-3">
          <label class="text-left text-sm block" for="message">Why is it important to recycle? &ast;</label>
          <Field as="textarea" name="message" :rules="validateForm" id="message" rows="8" class="w-full rounded" />
        </div>
        <div class="text-left">
		    <template v-if="Object.keys(errors).length">
			    <div class="text-xs text-pred normal-case"> {{ Object.values(errors)[0] }}</div>
  </template>
        </div>
        <div class="mt-2"><button class="btn btn-pblue">submit</button></div>
      </Form>
	</div>
    </div>
  </div>
</template>
