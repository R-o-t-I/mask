import React from 'react';
import {connect} from 'react-redux';

import {openModal} from "../../store/router/actions";

import { 
  ModalPage, 
  ModalPageHeader, 
  PanelHeaderButton, 
  withPlatform, 
  IOS,
  Button,
  Div,
  Spacing,
  Link
} from "@vkontakte/vkui";

import {
  Icon24Cancel,
  Icon24Dismiss,
  Icon28MasksOutline
} from '@vkontakte/icons';

class AddModal extends React.Component {

  render() {
    const {id, onClose, openModal, platform} = this.props;

    return (
      <ModalPage
        id={id}
        header={
          <ModalPageHeader
            left={platform !== IOS &&
            <PanelHeaderButton onClick={onClose}><Icon24Cancel/></PanelHeaderButton>}
            right={platform === IOS &&
            <PanelHeaderButton onClick={onClose}><Icon24Dismiss/></PanelHeaderButton>}
          >
            Добавить маску
          </ModalPageHeader>
        }
        onClose={onClose}
        settlingHeight={80}
      >
        <Div>
          <div style={{display: "flex", marginBottom: 6}}>
            <Icon28MasksOutline width={56} height={56} style={{marginRight: 12, color: "var(--icon_outline_secondary)", marginTop: "auto", marginBottom: "auto"}}/>
            Чтобы добавить маску в наш неофициальный каталог, напишите в личные сообщения следующую информацию:
          </div>
          – название маски;<br></br>
          – фото обложки маски;<br></br>
          – категорию маски.
          <Link href="https://vk.me/skyreglis" target="__blank">
            <Button style={{margin: "12px 0px 0px 0px"}} stretched size="m">Написать в лс сообщества</Button>
          </Link>
        </Div>
      </ModalPage>
    );
  }

}

const mapDispatchToProps = {
  openModal
};

export default withPlatform(connect(null, mapDispatchToProps)(AddModal));
