import { mount } from '@vue/test-utils'
import { computed } from "vue";
import {test,describe, vi, expect} from 'vitest';
import HomeView from '../views/HomeView.vue';
import * as todosSetup from '../todosSetup';

const setupMock = {
    todosIncompleted: computed(()=>[]),
    todosCompleted: computed(()=>[]),
    toggle: vi.fn(),
    deleteTodo: vi.fn(),
    add: vi.fn(),
};

describe('Hellow world test', () => {
    test('testeando componente', () => { 
        const wrapper = mount(HomeView);
        expect(wrapper.text()).contains('Todo List');
     });
     test('List is empty', () => {
         const spy = vi.spyOn(todosSetup,'todosFactory').mockReturnValue({
             ...setupMock
         });
         const wrapper = mount(HomeView);
         expect(wrapper.text()).toContain('Todo List');
         expect(wrapper.text()).toContain('Nada que Hacer');
     });
})