import { shallow } from 'enzyme';
import React from 'react'
import {GifGridItem} from '../../components/GifGridItem'

describe('Prueba <GifGridItem />', () => {
    const title = 'title';
    const url = 'https://gif.dck.com.mx/';
    const wrapper = shallow(<GifGridItem 
            title = {title}
            url = {url}
        />);
    test('<GifGridItem /> debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    }) 
    test('debe de tener un párrafo con el title', () => {
       /* const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);*/
    })
    test('debe de tener la imagen igua al url y alt de los props', () => {
        const img = wrapper.find('img');
        console.log(img.props());
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        console.log(div.prop('className'))
        const className = div.prop('className');
        expect(className.includes('animate__bounce')).toBe(true)
    })
    
})
