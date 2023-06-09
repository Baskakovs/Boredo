import styled from 'styled-components'
import TitleM from './TitleM'

//importing redux
import { useSelector } from 'react-redux'

const Box = styled.div`
diplay: flex;
flex-direction: column;
width: 100%;
border-radius: 5px;
background-color: #f8d7da;
border: 1px solid #EF4444;
margin: 16px 0;
`

const Title = styled(TitleM)`
padding-left: 16px;
`

const ErrorsList = styled.ul`
`


function Errors(props) {
    const errors = useSelector(state => state.errors.errors.errors)
    console.log(errors, 'errors')
    return(
        <Box>
            <Title>{`Something went wrong :(`}</Title>
            <ErrorsList>
                {
                    errors !== undefined ?
                   errors.map((error, index) => {
                          return <li key={index}>{error}</li>
                    })
                    : null
                }
            </ErrorsList>
            <Title>{`Hope that helps 🤔 :)`}</Title>
        </Box>
    )
}

export default Errors