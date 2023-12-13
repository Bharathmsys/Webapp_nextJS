import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header  from '@/components/Header'
import First_page from '@/pages/First_page'

describe('calculator',()=> {
    it('calculator',()=> {
        render(<First_page />)
        expect(screen.getByTestId('contactbutton')).toBeInTheDocument()
        })

        // it('router "information"', ()=> {
        //     render(<Home/>)
        //     const myElem = screen.getByText(/information/i)
        //     expect(myElem).toBeInTheDocument()
        //     })
})