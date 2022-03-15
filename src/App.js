import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {goBack, closeModal, setStory} from "./js/store/router/actions";
import {getActivePanel} from "./js/services/_functions";

import {
  Epic, 
  View, 
  Root, 
  Tabbar, 
  ModalRoot, 
  TabbarItem, 
  ConfigProvider,
  AdaptivityProvider, 
  AppRoot,
  platform,
  VKCOM,
  Cell,
  SplitCol,
  PanelHeader,
  SplitLayout,
  Panel,
  Group
} from "@vkontakte/vkui";

import { 
  Icon28BookOutline,
  Icon28GhostOutline,
  Icon28InfoOutline,
  Icon28MasksOutline,
} from '@vkontakte/icons';

import CatalogPanel from './js/panels/catalog/base';

import DocPanel from './js/panels/doc/base';

import ExamplePanel from './js/panels/example/base';

import InfoPanel from './js/panels/info/base';

import AddModal from './js/components/modals/AddModal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasHeader: true,
      isDesktop: false,
      Platform: platform()
    }

    this.lastAndroidBackAction = 0;
  }

  async componentDidMount() {
    const {goBack} = this.props;

    let parsedUrl = new URL(window.location.href)
    if (parsedUrl.searchParams.get('vk_platform') === 'desktop_web') {
      this.setState({ 
        isDesktop: true,
        hasHeader: false,
        Platform: VKCOM
      })
    }

    window.onpopstate = () => {
      let timeNow = +new Date();

      if (timeNow - this.lastAndroidBackAction > 500) {
        this.lastAndroidBackAction = timeNow;

        goBack();
      } else {
        window.history.pushState(null, null);
      }
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {activeView, activeStory, activePanel, scrollPosition} = this.props;

    if (
      prevProps.activeView !== activeView ||
      prevProps.activePanel !== activePanel ||
      prevProps.activeStory !== activeStory
    ) {
      let pageScrollPosition = scrollPosition[activeStory + "_" + activeView + "_" + activePanel] || 0;

      window.scroll(0, pageScrollPosition);
    }
  }

  render() {
    const {goBack, setStory, closeModal, popouts, activeView, activeStory, activeModals, panelsHistory} = this.props;
    const { isDesktop, hasHeader, Platform } = this.state

    let history = (panelsHistory[activeView] === undefined) ? [activeView] : panelsHistory[activeView];
    let popout = (popouts[activeView] === undefined) ? null : popouts[activeView];
    let activeModal = (activeModals[activeView] === undefined) ? null : activeModals[activeView];

    const homeModals = (
      <ModalRoot activeModal={activeModal}>
        <AddModal
          id="MODAL_PAGE_ADD"
          onClose={() => closeModal()}
        />
      </ModalRoot>
    );

    return (     
      <ConfigProvider platform={Platform} isWebView={true}>
        <AdaptivityProvider>
          <AppRoot>
            <SplitLayout
              header={hasHeader && <PanelHeader separator={false} />}
              style={{ justifyContent: "center" }}
            >
              <SplitCol
                animate={!isDesktop}
                spaced={isDesktop}
                width={isDesktop ? '704px' : '100%'}
                maxWidth={isDesktop ? '704px' : '100%'}
              >   
                <Epic activeStory={activeStory} tabbar={ !isDesktop && 
                <Tabbar>
                  <TabbarItem
                    onClick={() => setStory('catalog', 'base')}
                    selected={activeStory === 'catalog'}
                    text='Каталог'
                  >
                    <Icon28MasksOutline/>
                  </TabbarItem>
                  <TabbarItem
                    onClick={() => setStory('doc', 'base')}
                    selected={activeStory === 'doc'}
                    text='Документация'
                  >
                    <Icon28BookOutline/>
                  </TabbarItem>
                  <TabbarItem
                    onClick={() => setStory('example', 'base')}
                    selected={activeStory === 'example'}
                    text='Примеры'
                  >
                    <Icon28GhostOutline/>
                  </TabbarItem>
                  <TabbarItem
                    onClick={() => setStory('info', 'base')}
                    selected={activeStory === 'info'}
                    text='Информация'
                  >
                    <Icon28InfoOutline/>
                  </TabbarItem>
                </Tabbar>}>
                  <Root id="catalog" activeView={activeView} popout={popout}>
                    <View
                      id="catalog"
                      modal={homeModals}
                      activePanel={getActivePanel("catalog")}
                      history={history}
                      onSwipeBack={() => goBack()}
                    >
                      <CatalogPanel id="base" withoutEpic={false} platform={Platform}/>
                    </View>
                  </Root>
                  <Root id="doc" activeView={activeView} popout={popout}>
                    <View
                      id="doc"
                      modal={homeModals}
                      activePanel={getActivePanel("doc")}
                      history={history}
                      onSwipeBack={() => goBack()}
                    >
                      <DocPanel id="base" withoutEpic={false}/>
                    </View>
                  </Root>
                  <Root id="example" activeView={activeView} popout={popout}>
                    <View
                      id="example"
                      modal={homeModals}
                      activePanel={getActivePanel("example")}
                      history={history}
                      onSwipeBack={() => goBack()}
                    >
                      <ExamplePanel id="base"/>
                    </View>
                  </Root>
                  <Root id="info" activeView={activeView} popout={popout}>
                    <View
                      id="info"
                      modal={homeModals}
                      activePanel={getActivePanel("info")}
                      history={history}
                      onSwipeBack={() => goBack()}
                    >
                      <InfoPanel id="base"/>
                    </View>
                  </Root>
                </Epic>
              </SplitCol>

              {isDesktop && (
                <SplitCol fixed width='280px' maxWidth='280px'>
                  <Panel id='menuDesktop'>
                    {hasHeader && <PanelHeader/>}
                    <Group>
                      <Cell
                        onClick={() => setStory('catalog', 'base')}
                        disabled={activeStory === 'catalog'}
                        before={<Icon28MasksOutline/>}
                        style={ activeStory === 'catalog' ? {
                          backgroundColor: 'var(--button_secondary_background)',
                          borderRadius: 8
                        } : {}}
                      >
                        Каталог
                      </Cell>
                      <Cell
                        onClick={() => setStory('doc', 'base')}
                        disabled={activeStory === 'doc'}
                        before={<Icon28BookOutline/>}
                        style={ activeStory === 'doc' ? {
                          backgroundColor: 'var(--button_secondary_background)',
                          borderRadius: 8
                        } : {}}
                      >
                        Документация
                      </Cell>
                      <Cell
                        onClick={() => setStory('example', 'base')}
                        disabled={activeStory === 'example'}
                        before={<Icon28GhostOutline/>}
                        style={ activeStory === 'example' ? {
                          backgroundColor: 'var(--button_secondary_background)',
                          borderRadius: 8
                        } : {}}
                      >
                        Примеры
                      </Cell>
                      <Cell
                        onClick={() => setStory('info', 'base')}
                        disabled={activeStory === 'info'}
                        before={<Icon28InfoOutline/>}
                        style={ activeStory === 'info' ? {
                          backgroundColor: 'var(--button_secondary_background)',
                          borderRadius: 8
                        } : {}}
                      >
                        Информация
                      </Cell>
                    </Group>
                  </Panel>
                </SplitCol>
              )}
              
            </SplitLayout>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeView: state.router.activeView,
    activeStory: state.router.activeStory,
    panelsHistory: state.router.panelsHistory,
    activeModals: state.router.activeModals,
    popouts: state.router.popouts,
    scrollPosition: state.router.scrollPosition,
  };
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({setStory, goBack, closeModal}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);