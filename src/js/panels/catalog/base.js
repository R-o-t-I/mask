import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {
  Panel,
  Group,
  PanelHeader,
  ScreenSpinner,
  Tabs,
  TabsItem,
  HorizontalScroll,
  Spacing,
  PanelHeaderButton,
  VKCOM
} from '@vkontakte/vkui'

import { Icon28AddOutline } from '@vkontakte/icons';


class CatalogPanel extends React.Component {

    state = {
      activeTab: "all"
    };

    async openSpinner() {
        this.props.openPopout(<ScreenSpinner/>)
        await this.sleep(2500)
        this.props.closePopout()
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

  render() {
    const {id, setPage, withoutEpic, platform, openModal} = this.props;

    return (
      <Panel id={id}>
        <PanelHeader
          separator={false}
          left={<PanelHeaderButton onClick={() => openModal('MODAL_PAGE_ADD')} label={platform === VKCOM ? 'Добавить свою маску' : undefined}><Icon28AddOutline style={{marginRight: 12}}/></PanelHeaderButton>}
        >
          Каталог
        </PanelHeader>
        <Group>
          <Tabs>
            <HorizontalScroll
              showArrows
              getScrollToLeft={(i) => i - 120}
              getScrollToRight={(i) => i + 120}
            >
              <TabsItem
                onClick={() => this.setState({ activeTab: 'all' })}
                selected={this.state.activeTab === 'all'}
              >
                Все
              </TabsItem>
              <TabsItem
                onClick={() => this.setState({ activeTab: 'new' })}
                selected={this.state.activeTab === 'new'}
              >
                Новые
              </TabsItem>
              <TabsItem
                onClick={() => this.setState({ activeTab: 'zoo' })}
                selected={this.state.activeTab === 'zoo'}
              >
                Животные
              </TabsItem>
              <TabsItem
                onClick={() => this.setState({ activeTab: 'joking' })}
                selected={this.state.activeTab === 'joking'}
              >
                Шутливые
              </TabsItem>
              <TabsItem
                onClick={() => this.setState({ activeTab: 'personage' })}
                selected={this.state.activeTab === 'personage'}
              >
                Персонажи
              </TabsItem>
              <TabsItem
                onClick={() => this.setState({ activeTab: 'hats' })}
                selected={this.state.activeTab === 'hats'}
              >
                Шляпы
              </TabsItem>
              <TabsItem
                onClick={() => this.setState({ activeTab: 'glasses' })}
                selected={this.state.activeTab === 'glasses'}
              >
                Очки
              </TabsItem>
              <TabsItem
                onClick={() => this.setState({ activeTab: 'facialDistortion' })}
                selected={this.state.activeTab === 'facialDistortion'}
              >
                Искажения лица
              </TabsItem>
            </HorizontalScroll>
          </Tabs>
          <Spacing separator="top" />
          {this.state.activeTab === "all" ? <div>

          </div> : null}

          {this.state.activeTab === "new" ? <div>

          </div> : null}

          {this.state.activeTab === "zoo" ? <div>

          </div> : null}

          {this.state.activeTab === "joking" ? <div>

          </div> : null}

          {this.state.activeTab === "personage" ? <div>

          </div> : null}

          {this.state.activeTab === "hats" ? <div>

          </div> : null}

          {this.state.activeTab === "glasses" ? <div>

          </div> : null}

          {this.state.activeTab === "facialDistortion" ? <div>

          </div> : null}
          В разработке
        </Group>
      </Panel>
    );
  }

}

const mapDispatchToProps = {
  setPage,
  goBack,
  openPopout,
  closePopout,
  openModal
};

export default connect(null, mapDispatchToProps)(CatalogPanel);
