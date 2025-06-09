<template>
  <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <!-- Background overlay -->
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="close"></div>

      <!-- Modal panel -->
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <!-- Close button -->
          <div class="absolute top-0 right-0 pt-4 pr-4">
            <button
              @click="close"
              class="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <span class="sr-only">Close</span>
              <i class="fas fa-times text-xl"></i>
            </button>
          </div>

          <!-- Content -->
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <div class="mb-4">
                <img :src="post.image" :alt="$t(post.titleKey)" class="w-full h-64 object-cover rounded-lg">
              </div>
              
              <div class="text-xs text-gray-500 mb-2 flex gap-x-4">
                <span><i class="fas fa-calendar-alt mr-1.5"></i>{{ $t(post.dateKey) }}</span>
                <span><i class="fas fa-user mr-1.5"></i>{{ $t('blogPage.by') }} {{ $t(post.authorKey) }}</span>
              </div>

              <h3 class="text-2xl font-semibold text-gray-900 mb-4">
                {{ $t(post.titleKey) }}
              </h3>

              <div class="mt-4 text-gray-600 leading-relaxed space-y-4">
                {{ $t(post.excerptKey) }}
                <p>{{ $t(`${post.id}FullContent`) }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal footer -->
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            @click="close"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            {{ $t('blogPage.closeButton') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  show: Boolean,
  post: Object
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>