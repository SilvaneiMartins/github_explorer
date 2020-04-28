import styled, { css } from 'styled-components'
import { shade } from 'polished'

import Colors from '../../utilitario/colors'

interface FormProps {
   hasError: boolean
}

export const Titulo = styled.h1`
   font-size: 30px;
   color: ${Colors.title};
   max-width: 450px;
   line-height: 56px;
   margin-top: 10px;
`

export const Form = styled.form<FormProps>`
   margin-top: 10px;
   max-width: 700px;
   display: flex;

   input {
      flex: 1;
      height: 40px;
      padding: 0 24px;
      border: 0;
      border-radius: 5px 0px 0px 5px;
      border: 2px solid ${Colors.border};
      border-right: 0;

      ${(props) => props.hasError && css`
         border-color: ${Colors.error};
      `}

      &::placeholder {
         color: ${Colors.placeholder};
      }

   }

   button {
      width: 210px;
      height: 40px;
      background: ${Colors.button};
      border-radius: 0px 5px 5px 0px;
      border: 0;
      color: ${Colors.buttonText};
      font-weight: bold;
      transition: background-color 0.2s;

      &:hover {
         background: ${shade(0.2, Colors.button)}
      }
   }
`

export const Repositories = styled.div`
   margin-top: 10px;
   max-width: 700px;

   a {
      background: ${Colors.repositoriesBackground};
      border-radius: 5px;
      width: 100%;
      padding: 24px;
      display: block;
      text-decoration: none;

      display: flex;
      align-items: center;
      transition: transform 0.2s;

      &:hover {
         transform: translateX(10px);
      }

      & + a {
         margin-top: 10px;  
      }

      img {
         width: 64px;
         height: 64px;
         border-radius: 50%;
      }

      div {
         margin: 0 16px;
         flex: 1;

         strong {
            font-size: 20px;
            color: ${Colors.strong};
         }

         p {
            font-size: 16px;
            color: ${Colors.p};
            margin-top: 4px;   
         }
      }

      svg {
         margin-left: auto;
         color: ${Colors.svg};
      }
   }
`

export const Error = styled.span`
   display: block;
   color: ${Colors.error};
   margin-top: 5px;
   font-size: 12px;
   margin-left: 2px;
`
