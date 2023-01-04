import styled from '@emotion/styled';



export const FrendStyles = styled.div`
  /* border: 1px solid lightgray; */
  /* background-color: #fff; */
  width: 400px;
  position: relative;
  /* padding-top: 20px; */
  margin: 50px;
  

  .frend-list{
    padding: 0;
 
  }
.avatar {
    display: block;
    width: 80px;
    margin-bottom: 30px;
  }

  .name {
    font-weight: 800;
    margin-bottom: 10px;
  }
  
  .item{
    display: flex;
       margin-bottom: 10px;
 
 box-shadow:  5px 5px 17px #8d8d8d,
             -5px -5px 17px #ffffff;
   transition-duration: 250ms;
  } 
  .item:hover,
   .item:focus {
    box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.1), 0px 1px 25px rgba(0, 0, 0, 0.08), 0px 2px 25px rgba(0, 0, 0, 0.12);
    transform: scale(1.1);
    transition-duration: 250ms;
    outline: none;
}
.item:last-child{
margin-bottom: 0;
  }
`;
