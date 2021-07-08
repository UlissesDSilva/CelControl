import { BiSearch } from 'react-icons/bi';
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <span>pacceqx</span>
      <span className="application-name">CelControl</span>
      <button type="button">
        <BiSearch size={24} color="#FFF" />
      </button>
    </Container>
  );
}