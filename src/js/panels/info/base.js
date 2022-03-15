import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout} from "../../store/router/actions";

import {
    Panel,
    PanelHeader,
    Group,
    RichCell,
    Avatar,
    Link,
    Button,
    CellButton,
    Div,
    Footer,
    Text,
    Spacing
} from "@vkontakte/vkui";

import {
  Icon12Verified,
  Icon28HelpOutline,
  Icon28MasksOutline,
  Icon28MessageOutline
} from '@vkontakte/icons';

class InfoPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    const {id} = this.props;

    return (
      <Panel id={id}>
        <PanelHeader separator={true}>Информация</PanelHeader>
        <Group>
          <Div>
            <Text weight="regular">
              Привет, создатель масок! Этот сервис создан командой SkyReglis Studio для помощи в создании масок.
            </Text>
          </Div>
          <RichCell
            disabled
            className="rich-cell-block"
            before={<Link href="https://vk.com/skreglis" target="_blank" style={{ marginRight: 10 }}><Avatar style={{objectFit: "cover"}} size={72} src="https://sun9-40.userapi.com/impg/qibniluRy0n2tlv9etXMLBAsOD6dfUjncaUdDA/zu6iAe1FvTc.jpg?size=800x800&quality=96&sign=1a2220f4603f6419c1852e39c005261b&type=album" /></Link>}
            caption="Разработчики"
            actions={
              <div className="buttonInfo">
                <Link href="https://vk.me/skreglis" target="_blank"><Button style={{ marginRight: 10 }}>Написать</Button></Link>
                <Link href="https://vk.com/skreglis" target="_blank"><Button style={{ marginRight: 10 }} mode="secondary">Перейти</Button></Link>
                <Link href="https://vk.com/masks#/-191809582" target="_blank"><Button before={<Icon28MasksOutline width={24} height={24} />} mode="outline">Наши маски</Button></Link>
              </div>
            }
          >
            SkyReglis Studio
          </RichCell>
          <Spacing separator="center" />
          <RichCell
            disabled
            className="rich-cell-block"
            before={<Link href="https://vk.com/msx" target="_blank" style={{ marginRight: 10 }}><Avatar style={{objectFit: 'cover'}} size={72} src="https://sun9-73.userapi.com/impf/c845324/v845324976/485ad/nInWKqjAoV0.jpg?size=559x557&quality=96&sign=be7e5a802901c03021bcb1d65e1360b8&type=album" /></Link>}
            caption="Официальное сообщество"
            actions={
              <div>
                <Link href="https://vk.me/msx" target="_blank"><Button style={{ marginRight: 10 }}>Написать</Button></Link>
                <Link href="https://vk.com/msx" target="_blank"><Button mode="secondary">Перейти</Button></Link>
              </div>
            }
          >
            <div className="title-block">Художники масок {<Icon12Verified className="icon-title-block"/>}</div>
          </RichCell>
          <Link href="https://vk.com/@msx-faq" target="_blank"><CellButton before={<Icon28HelpOutline />}>FAQ о масках</CellButton></Link>
          <Link href="https://vk.cc/aawd5V" target="_blank"><CellButton before={<Icon28MessageOutline />}>Беседа художников</CellButton></Link>
          <Link href="https://vk.com/masks" target="_blank"><CellButton before={<Icon28MasksOutline />}>Каталог масок</CellButton></Link>
          <Div>
            ВКонтакте — открытая платформа, на которой любой разработчик может запустить какой-то продукт для огромной аудитории, а художник — маску, которую увидят миллионы.
            <br></br><br></br>
            Попробуйте себя в роли художника масок! С вас — базовые знания графических 2D/3D-редакторов, чувство прекрасного и богатая фантазия, с @msx — максимально подробная документация. Расскажем, например, как добавлять в маску свои иллюстрации, анимацию, внедрять 3D-модели и даже как добавлять маску в общий каталог. Вопросы и пожелания можно отправлять в сообщения этому сообществу.
          </Div>
          <Div style={{textAlign: "center"}}>
            <em>***<br></br>С художниками, чьи работы будут популярны среди пользователей, @msx продолжит совместное творчество на коммерческой основе. Если @msx с вами окажется на одной творческой волне, то сотрудничество точно не ограничится одной маской.</em>
          </Div>
          <Footer>
            Версия: 1.0.0
          </Footer>
        </Group>
      </Panel>
    );
  }

}

const mapDispatchToProps = {
  setPage,
  openPopout,
  closePopout
};

export default connect(null, mapDispatchToProps)(InfoPanel);
