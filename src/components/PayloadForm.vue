<!--
  Formulir generik dari Payload CMS (plugin form-builder).
  Pakai: <PayloadForm formTitle="Kritik & Saran" />
  Render otomatis mengikuti definisi field di CMS. Tanpa ubah kode untuk form baru.
-->
<template>
  <div>
    <div v-if="loading" class="py-8 text-center text-gray-400 text-sm font-bold uppercase tracking-widest">
      Memuat formulir...
    </div>
    <div v-else-if="loadError" class="py-8 text-center text-red-400 text-sm font-bold">
      Formulir tidak dapat dimuat saat ini.
    </div>
    <div v-else-if="sent" class="py-8 text-center">
      <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <p class="text-gray-700 font-bold">{{ confirmationText }}</p>
    </div>
    <form v-else @submit.prevent="submitForm">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="field in fields" :key="field.name" :class="field.width === '100' ? 'md:col-span-2' : ''">
          <label class="block text-sm font-bold text-gray-700 mb-2">
            {{ field.label }}<span v-if="field.required" class="text-red-500">*</span>
          </label>
          <input
            v-if="['text', 'email', 'number', 'date'].includes(field.blockType)"
            v-model="values[field.name]"
            :type="field.blockType === 'date' ? 'date' : field.blockType === 'number' ? 'number' : field.blockType === 'email' ? 'email' : 'text'"
            :required="field.required"
            :placeholder="field.defaultValue || ''"
            class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#195682]/50 focus:border-[#195682] transition-colors"
          />
          <textarea
            v-else-if="field.blockType === 'textarea'"
            v-model="values[field.name]"
            rows="5"
            :required="field.required"
            class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#195682]/50 focus:border-[#195682] transition-colors"
          ></textarea>
          <select
            v-else-if="field.blockType === 'select'"
            v-model="values[field.name]"
            :required="field.required"
            class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#195682]/50 focus:border-[#195682] transition-colors"
          >
            <option value="" disabled>Pilih...</option>
            <option v-for="opt in field.options || []" :key="opt.value" :value="opt.value">
              {{ opt.label }}
            </option>
          </select>
          <label v-else-if="field.blockType === 'checkbox'" class="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" v-model="values[field.name]" class="w-4 h-4" />
            {{ field.label }}
          </label>
        </div>
      </div>
      <p v-if="submitError" class="mt-4 text-sm font-bold text-red-500">{{ submitError }}</p>
      <button
        type="submit"
        :disabled="sending"
        class="mt-6 w-full md:w-auto px-8 py-4 bg-[#f9ac42] hover:bg-orange-500 disabled:opacity-50 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-1 inline-flex items-center justify-center"
      >
        {{ sending ? 'Mengirim...' : submitLabel }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  formTitle: { type: String, required: true },
  submitLabel: { type: String, default: 'Kirim Pesan' },
})

const cmsUrl = (import.meta.env.VITE_CMS_URL || 'http://127.0.0.1:3000').replace(/\/$/, '')
const fields = ref([])
const values = ref({})
const formId = ref(null)
const confirmationText = ref('Terima kasih! Pesan Anda telah kami terima.')
const loading = ref(true)
const loadError = ref(false)
const sending = ref(false)
const sent = ref(false)
const submitError = ref('')

function lexicalToText(node) {
  if (!node) return ''
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map(lexicalToText).join('')
  if (node.text) return node.text + (node.children ? lexicalToText(node.children) : '')
  if (node.children) return lexicalToText(node.children) + ' '
  if (node.root) return lexicalToText(node.root)
  return ''
}

onMounted(async () => {
  try {
    const res = await fetch(`${cmsUrl}/api/forms?where[title][equals]=${encodeURIComponent(props.formTitle)}&limit=1`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    const form = (data.docs || [])[0]
    if (!form) throw new Error('Form tidak ditemukan')
    formId.value = form.id
    fields.value = (form.fields || []).filter((f) =>
      ['text', 'email', 'number', 'date', 'textarea', 'select', 'checkbox'].includes(f.blockType),
    )
    if (form.confirmationMessage) {
      const text = lexicalToText(form.confirmationMessage).trim()
      if (text) confirmationText.value = text
    }
  } catch (err) {
    console.error('Gagal memuat form:', err)
    loadError.value = true
  } finally {
    loading.value = false
  }
})

async function submitForm() {
  sending.value = true
  submitError.value = ''
  try {
    const submissionData = Object.entries(values.value).map(([field, value]) => ({
      field,
      value: typeof value === 'boolean' ? (value ? 'Ya' : 'Tidak') : String(value ?? ''),
    }))
    const res = await fetch(`${cmsUrl}/api/form-submissions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ form: formId.value, submissionData }),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    sent.value = true
  } catch (err) {
    console.error('Gagal mengirim:', err)
    submitError.value = 'Gagal mengirim. Coba lagi sebentar lagi.'
  } finally {
    sending.value = false
  }
}
</script>
