import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  const cartSize = useSelector((state) => state.cart.length);

  let showItems = '';
  if (cartSize === 0) {
    showItems = 'vazio';
  } else if (cartSize === 1) {
    showItems = '1 item';
  } else {
    showItems = `${cartSize} itens`;
  }
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="CineToys" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{showItems}</span>
        </div>
        <MdShoppingBasket color="#FFF" size={36} />
      </Cart>
    </Container>
  );
}

Header.propTypes = {
  cartSize: PropTypes.number.isRequired,
};
