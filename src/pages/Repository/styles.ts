import styled from 'styled-components'

import Colors from '../../utilitario/colors'

export const Header = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 5px;

   a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: ${Colors.buttonVoltar};
      transition: color 0.2s;

      &:hover {
         color: ${Colors.hover}
      }

      svg {
         margin-right: 4px;
      }
   }
`

export const RepositoryInfo = styled.section`
   margin-top: 30px;

   header {
      display: flex;
      align-items: center;

      img {
         width: 120px;
         height: 120px;
         border-radius: 50%;
      }

      div {
         margin-left: 24px;

         strong {
            font-size: 28px;
            color: ${Colors.divColorStrong};
         }  

         p {
            font-size: 18px;
            color: ${Colors.divColorP};
            margin-top: 4px;
         }
      }
   }

   ul {
      display: flex;
      list-style: none;
      margin-top: 20px;

      li {

         & + li {
            margin-left: 80px;
         }

         strong {
            display: block;
            font-size: 28px;
            color: ${Colors.divColorStrong};
         }
      }

      span {
         display: block;
         margin-top: 4px;
         color: ${Colors.span};
      }


   }
`

export const Issues = styled.div`
   margin-top: 20px;

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