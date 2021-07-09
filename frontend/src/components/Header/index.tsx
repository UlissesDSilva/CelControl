import { BiSearch } from 'react-icons/bi';
import { HiMenu } from 'react-icons/hi';
import { Container } from "./styles";
import { ModalFacilitator } from '../Modal/';
import { Affix } from 'antd'

export function Header() {
  return (
    <Affix offsetTop={0}>
      <Container>
        <ModalFacilitator/>
        <span>
          <HiMenu/>
          pacceqx
        </span>
        <span className="application-name">CelControl</span>
        <button type="button">
          <BiSearch size={24} color="#FFF" />
        </button>
      </Container>
    </Affix>
  );
}