import { render, screen } from "@testing-library/react"
import UserViewer from "./UserViewer"
import renderer from 'react-test-renderer'

test('should render UserViewer correctly', ()=>{
    render(<UserViewer />)
    const userViewerElement = screen.getByTestId('user-header')
    expect(userViewerElement).toBeInTheDocument()
})

test ('matches snapshot', ()=>{
const tree = renderer.create(<UserViewer />).toJSON()
expect(tree).toMatchSnapshot()
})