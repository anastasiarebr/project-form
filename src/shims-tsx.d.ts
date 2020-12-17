import 'vue-tsx-support'
import { AllHTMLAttributes } from "vue-tsx-support/types/dom";

declare module "vue-tsx-support/types/base" {
  type HTMLAttrs = Omit<AllHTMLAttributes, 'size'>
  interface ComponentAdditionalAttrs extends HTMLAttrs {}
}