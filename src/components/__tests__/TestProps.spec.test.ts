import {describe, it, expect, test, vi} from "vitest";
import {mount} from "@vue/test-utils";
import HomeView from '@/views/HomeView.vue';
import TestComponent from "@/components/TestComponent.vue";
describe('тестирование пропсов в коомпоненте', () => {
    test('test missing values for existing props', () => {
        const wrapper = mount(TestComponent, {
            props: {
                id:"3"
            }
        })
        expect(wrapper.find('.test-text').text()).toContain('default value')
        expect(wrapper.find('.id-test').text()).toContain('3')

    })
});