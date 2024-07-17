<script setup>

</script>

<template>
  <div class="text-center mx-6 grid grid-cols-1 gap-2 md:grid-cols-2 md:mt-12">
  <div class="w-2/5 mx-auto mt-6">
    <img src="/logos.png" />
  </div>
    <div>
      <h1 class="pt-6 px-8">
        <span class="text-porange">Celebrating 1 Year</span> of Victoria's
        Container Deposit Scheme
      </h1>
      <p class="reading my-2 px-8 text-white text-xs leading-5">
      Tell us why you care for our planet and have your message displayed from November 2024 and through the summer school holidays at Scienceworks.
      </p>
      <div class="flex">
        <div class="m-auto pb-6">
          <button class="btn bg-pmint">Sign up for newsletter</button>
          <button class="btn bg-white">Learn more about</button>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-xl p-8 grid grid-cols-1">
      <Form @submit="onSubmit" class="uppercase">
        <div class="grid grid-cols-2 my-3 gap-2">
          <div class="text-left">
            <label for="fname" class="text-sm block">First Name &ast;</label>
            <Field
              name="fname"
              type="text"
              :rules="validateEmail"
              class="rounded p-1 w-full"
            />
          </div>
          <div class="text-left">
            <label class="text-sm block" for="year">Year Level &ast;</label>
            <Field name="year" type="text" class="rounded p-1 w-full" />
          </div>
        </div>
        <div class="my-3">
          <label class="text-left text-sm block" for="school_name"
            >School Name &ast;</label
          >
          <Field
            type="text"
            name="school_name"
            id="school_name"
            class="w-full rounded"
          />
        </div>
        <div class="my-3">
          <label class="text-left text-sm block" for="teacher_name"
            >Teacher Name &ast;</label
          >
          <Field
            type="text"
            name="teacher_name"
            id="teacher_name"
            class="w-full rounded"
          />
        </div>
        <div class="mt-3">
          <label class="text-left text-sm block" for="message"
            >Why is it important to recycle? &ast;</label
          >
          <Field
            as="textarea"
            name="message"
            id="message"
            rows="8"
            class="w-full rounded"
          />
        </div>
        <div class="text-left">
        <ErrorMessage class="text-xs text-pred normal-case" name="fname" />
        </div>
        <div class="mt-2"><button class="btn btn-pblue">submit</button></div>
      </Form>
    </div>
  </div>
<Footer/>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    onSubmit(values) {
      console.log(JSON.stringify(values, null, 2));
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'You missed something here*';
      }

      // All is good
      return true;
    },
  },
};
</script>
