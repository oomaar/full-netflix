import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { 
  Background, 
  Container, 
  Logo, 
  ButtonLink, 
  Feature, 
  Text, 
  FeatureCallout, 
  TextLink, 
  Group, 
  Picture, 
  Profile,
  Dropdown,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from "./styles/Header";

export default function Header({ children, bg = true, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}


Header.Logo = ({ to, ...restProps }) => {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = ({ children, ...restProps }) => {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

// Header Profile
Header.Feature = ({children, ...restProps}) => <Feature {...restProps}>{children}</Feature>;

Header.Text = ({children, ...restProps}) => <Text {...restProps}>{children}</Text>;

Header.FeatureCallout = ({children, ...restProps}) => <FeatureCallout {...restProps}>{children}</FeatureCallout>;

Header.Frame = ({ children, ...restProps }) => <Container {...restProps}>{children}</Container>;

Header.TextLink = ({children, ...restProps}) => <TextLink {...restProps}>{children}</TextLink>;

Header.Group = ({children, ...restProps}) => <Group {...restProps}>{children}</Group>;

Header.Picture = ({src, ...restProps}) => <Picture {...restProps} src={`/images/users/${src}.png`} />;

Header.Profile = ({children, ...restProps}) => <Profile {...restProps}>{children}</Profile>;

Header.Dropdown = ({children, ...restProps}) => <Dropdown {...restProps}>{children}</Dropdown>;

// Search
Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}) {
  // const [searchActive, setSearchActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click">
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>

     <SearchInput
        value={searchTerm}
        onChange={({target}) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  )
}

// Play Button
Header.PlayButton = ({children, ...restProps}) => <PlayButton {...restProps}>{children}</PlayButton>;