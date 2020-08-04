import Vue from 'vue'
import Dialog from './index.vue'

const DialogConstructor = Vue.extend(Dialog)

function toast(Options) {
    const dialogConstructor = new DialogConstructor({propsData: Options})
    dialogConstructor.vm = dialogConstructor.$mount()
    document.body.appendChild(dialogConstructor.vm.$el)
}

function dialog() { }
dialog.prototype.toast = toast
export default new dialog();