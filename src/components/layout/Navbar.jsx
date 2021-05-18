import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Tab } from 'semantic-ui-react';
import store from '../../state/store/configureStore';
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const panes = [
    {
      menuItem: 'Home',
    },
  ];
  return (
    <>
      <Segment data-cy='navbar' id='navbar' inverted size='tiny'>
        <Tab
          data-cy='home-tab'
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          as={Link}
          to='/'
          onClick={() => store.dispatch({ type: 'ERROR_RESET' })}
        />
      </Segment>
      <Link data-cy='header' to='/'>
        <div id='fakenews' data-cy="app-title" dangerouslySetInnerHTML={{ __html: t('appTitle') }}>

        </div>
        <div data-cy="language-select">
          <span
            onClick={() => { i18n.changeLanguage('se') }}
          >{t('languageNames.swedish')}</span>
          <span
            onClick={() => { i18n.changeLanguage('en') }}
          >{t('languageNames.english')}</span>
        </div>
      </Link>
    </>
  );
};

export default Navbar;
