import {describe, it, expect, test, vi} from "vitest";
import {mount} from "@vue/test-utils";
import HomeView from '@/views/HomeView.vue';
import {Roles} from "@/types/Roles.ts";
import {strict} from "node:assert";
import {render} from "vue";


// describe('Тест добавления юзера', () => {
//     test('add user', () => {
//         const wrapper = mount(HomeView);
//         const vm = wrapper.vm
//         vm.name = 'asd'
//         vm.email = 'asd'
//         vm.role = 'asd'
//         vm.addUser()
//         expect(vm.users.length).toBe(1)
//         expect(vm.users[[0]]).toEqual({
//             name: 'asd',
//             email: 'asd',
//             role: "asd"
//         })
//     })
//
//
//     test('deelete User', () => {
//         const wrapper = mount(HomeView);
//         const vm = wrapper.vm
//         vm.name = 'asd'
//         vm.email = 'asd'
//         vm.role = 'asd'
//         vm.users.push({
//             name: vm.name,
//             email: vm.email,
//             role: vm.role,
//         })
//         expect(vm.users).toEqual([{
//             name: vm.name,
//             email: vm.email,
//             role: vm.role,
//         }]);
//         vm.deleteUser(0)
//
//
//         expect(vm.users.length).toBe(0)
//         expect(vm.users).toEqual([]);
//
//     })
//
// })


describe('тест какой-нибудь кнопки на компоненте ', () => {


    test('counter button test', async () => {

        // смонтировали компонень
        const wrapper =  mount(HomeView);
        // нашли нужный нам элемент
        const counterButton = wrapper.find('#counter-button');

       //  клик проверка счетчика
       await counterButton.trigger('click')
        expect(wrapper.vm.count).toEqual(1)
    })
})

// describe("HomeView", () => {
//     it("добавляет нового пользователя через addUser", async () => {
//         const wrapper = mount(HomeView)
//
//         // доступ к vm (экземпляру компонента)
//         const vm = wrapper.vm as any
//
//         // задаём значения для полей
//         vm.name = "Иван"
//         vm.email = "ivan@example.com"
//         vm.role = "user"
//
//         // вызываем метод
//         vm.addUser()
//
//         // проверяем что массив обновился
//         expect(vm.users.length).toBe(1)
//         expect(vm.users[0]).toEqual({
//             name: "Иван",
//             email: "ivan@example.com",
//             role: "user"
//         })
//     })
// })