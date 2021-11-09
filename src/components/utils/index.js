import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  cursor: pointer;
  color: white;
  text-decoration: none;
  :visited { color:white; }
  :hover {color: blue}
`