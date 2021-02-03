import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";
import ProfilesContainer from "./Profiles";
import { Header, Loading, Card, Player } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import FooterContainer from "./Footer";
import Fuse from "fuse.js";

export default function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('series');
  const [slideRows, setSlideRows] = useState('');

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    // console.log('profile', profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'],});
    const results = fuse.search(searchTerm).map(({item}) => item);

    if(slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm])

  //dontShowOnSmallViewPort
  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="paranormal" dontShowOnSmallViewPort>
        <Header.Frame src="paranormal">

          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>
              Series</Header.TextLink>
            <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>
              Films</Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>

                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>

                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out of Netflix</Header.TextLink>
                </Header.Group>

              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>

        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallout>Watch Paranormal Now</Header.FeatureCallout>
          <Header.Text>
            After a skeptical hematologist is plunged into a series of inexplicable events, he unwillingly
            becomes the go-to-guy for paranormal investigations.
          </Header.Text>
          {/* <Header.PlayButton>Play</Header.PlayButton> */}
          <Player>
            <Player.Button />
            <Player.Video src="/videos/Paranormal.mp4" />
          </Player>
        </Header.Feature>
      </Header>
      
      <Card.Group>
        {slideRows.map(slideItem => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map(item => (
                <Card.Item key={item.docId}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            {/* <Card.Feature category={category}>
              <player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </player>
            </Card.Feature> */}
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
      <ProfilesContainer user={user} setProfile={setProfile} />
    );
}