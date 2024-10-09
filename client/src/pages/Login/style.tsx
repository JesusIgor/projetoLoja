import styled from 'styled-components';

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    max-width: 600px;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 20px;
    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    margin: 20px;
`;

export const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
    color: #003366;
`;

export const SubTitle = styled.h2`
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
    color: #003366;
`;

export const ForgotPasswordLink = styled.span`
    font-size: 14px;
    color: #003366;
    cursor: pointer;
    text-align: right;
    margin-top: -10px;
    &:hover {
        text-decoration: underline;
    }
`;