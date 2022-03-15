import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout} from "../../store/router/actions";

import {
  Group,
  Panel,
  PanelHeader,
  TabsItem,
  Tabs,
  HorizontalScroll,
  Link,
  Div,
  Gallery,
  Spacing,
} from "@vkontakte/vkui";

import beard from '../../../img/examples/patch/beard.png';
import bowTie from '../../../img/examples/patch/bowTie.png';
import frame from '../../../img/examples/patch/frame.png';
import glasses from '../../../img/examples/patch/glasses.png';
import hat from '../../../img/examples/patch/hat.png';
import pink_ears from '../../../img/examples/patch/pink_ears.png';
import leafanimation from '../../../img/examples/patch/leafanimation.gif';
import animalears from '../../../img/examples/patch/animalears.png';
import Zebra from '../../../img/examples/facemodel/Zebra.png';
import Skull from '../../../img/examples/facemodel/Skull.gif';
import Cosmos from '../../../img/examples/facemodel/Cosmos.png';
import neon from '../../../img/examples/facemodel/neon.png';
import orange from '../../../img/examples/facemodel/orange.png';
import tatu from '../../../img/examples/facemodel/tatu.png';
import retro from '../../../img/examples/retro.png';
import beautify from '../../../img/examples/beautify.png';
import colorfilter from '../../../img/examples/colorfilter.png';
import liquifiedwarp from '../../../img/examples/liquifiedwarp.png';

import customhint from '../../../img/examples/plugins/customhint.mp4';
import maskswitching from '../../../img/examples/plugins/maskswitching.mp4';
import parallax from '../../../img/examples/plugins/parallax.mp4';
import particles from '../../../img/examples/plugins/particles.mp4';
import randomtest from '../../../img/examples/plugins/randomtest.mp4';
import spinner3d from '../../../img/examples/plugins/spinner3d.mp4';

class ExamplePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "effects"
    };
  }

  render() {
    const {id} = this.props;

    return (
      <Panel id={id}>
        <PanelHeader
          separator={false}
        >
          Примеры
        </PanelHeader>
        <Group>
          <Tabs>
            <TabsItem
              onClick={() => this.setState({ activeTab: 'effects' })}
              selected={this.state.activeTab === 'effects'}
            >
              Эффекты
            </TabsItem>
            <TabsItem
              onClick={() => this.setState({ activeTab: 'plugins' })}
              selected={this.state.activeTab === 'plugins'}
            >
              Плагины
            </TabsItem>
          </Tabs>
          <Spacing separator="top" />
          {this.state.activeTab === "effects" ? <div>
            <Div className="tetle-examples">Примеры из базовых эффектов</Div>
            <Div className="category-examples" mode="primary" multiline>patch</Div>
            <Gallery
              slideWidth="100%"
              className="gallery-examples"
              bullets="light"
              showArrows
            >
              <img
                className="img-gallery-examples"
                src={beard}
              />
              <img
                className="img-gallery-examples"
                src={bowTie}
              />
              <img
                className="img-gallery-examples"
                src={frame}
              />
              <img
                className="img-gallery-examples"
                src={glasses}  
              />
              <img
                className="img-gallery-examples"
                src={hat}
              />
              <img
                className="img-gallery-examples"
                src={pink_ears}    
              />
            </Gallery>
            <Div>
              <Link href="https://mask.vk.me/sample/beard.zip" target="_blank" >Beard.zip</Link>,
              <Link href="https://mask.vk.me/sample/bowTie.zip" target="_blank"> bowTie.zip</Link>,
              <Link href="https://mask.vk.me/sample/frame.zip" target="_blank"> frame.zip</Link>,
              <Link href="https://mask.vk.me/sample/glasses.zip" target="_blank"> glasses.zip</Link>,
              <Link href="https://mask.vk.me/sample/hat.zip" target="_blank"> hat.zip</Link>,
              <Link href="https://mask.vk.me/sample/pink_ears.zip" target="_blank"> pinkEars.zip </Link>
              – примеры использования эффекта patch с минимальным набором параметров. Автор <Link href="https://vk.com/annlovchikova" target="_blank">Aнна Ловчикова</Link>.
            </Div>
            <img
              className="img-gallery-examples"
              src={animalears}
            />
            <Div>
              <Link href="https://mask.vk.me/sample/animalears.zip" target="_blank">AnimalEars.zip </Link>
              — пример использования одной текстуры в двух patch эффектах. В примере используются расширенные параметры текстур. Автор <Link href="https://vk.com/vitaliyzayats" target="_blank">Виталий Заяц</Link>.
            </Div>
            <img
              className="img-gallery-examples"
              src={leafanimation}
            />
            <Div>
              <Link href="https://mask.vk.me/sample/leafanimation.zip" target="_blank">LeafAnimation.zip </Link>
              — пример использования анимации текстуры эффекта patch с помощью секвенции, где каждый отдельный файл является отдельным кадром анимации, и атласа, где те же самые кадры анимации, но размещены в одном файле. Для наилучшей оптимизации рекомендуется кадры анимации объединять в атласы. Автор <Link href="https://vk.com/annlovchikova" target="_blank">Aнна Ловчикова</Link>.
            </Div>
            <Div className="category-examples" mode="primary" multiline>facemodel</Div>
            <img
              className="img-gallery-examples"
              src={Zebra}
            />
            <Div>
              <Link href="https://mask.vk.me/sample/Zebra.zip" target="_blank">Zebra.zip </Link>
              — пример использования эффекта facemodel с разными режимами наложения, которые дополняют друг друга. Подробнее о режимах наложения найдёте в расширенных параметрах текстур. Автор <Link href="https://vk.com/annlovchikova" target="_blank">Анна Ловчикова</Link>.
            </Div>
            <img
              className="img-gallery-examples"
              src={Skull}
            />
            <Div>
              <Link href="https://mask.vk.me/sample/Skull.zip" target="_blank">Skull.zip </Link>
              — пример анимации текстуры эффекта facemodel. Автор <Link href="https://vk.com/annlovchikova" target="_blank">Анна Ловчикова</Link>.
            </Div>
            <Gallery
              slideWidth="100%"
              className="gallery-examples"
              bullets="light"
              showArrows
            >
              <img
                className="img-gallery-examples"
                src={Cosmos}
              />
              <img
                className="img-gallery-examples"
                src={neon}
              />
              <img
                className="img-gallery-examples"
                src={orange}
              />
              <img
                className="img-gallery-examples"
                src={tatu}  
              />
            </Gallery>
            <Div>
              <Link href="https://mask.vk.me/sample/Cosmos.zip" target="_blank">Cosmos.zip</Link>,
              <Link href="https://mask.vk.me/sample/neon.zip" target="_blank"> neon.zip</Link>,
              <Link href="https://mask.vk.me/sample/orange.zip" target="_blank"> orange.zip</Link>,
              <Link href="https://mask.vk.me/sample/tatu.zip" target="_blank"> tatu.zip </Link>
              — примеры использования эффекта facemodel с минимальным набором параметров. Автор <Link href="https://vk.com/annlovchikova" target="_blank">Aнна Ловчикова</Link>.
            </Div>
            <Div className="category-examples" mode="primary" multiline>model3d</Div>
            <img
              className="img-gallery-examples"
              src={retro}
            />
            <Div>
              <Link href="https://mask.vk.me/sample/retro.zip" target="_blank">Retro.zip </Link>
              — пример использования эффекта model3d вместе с оклюдером. Автор <Link href="https://vk.com/berrymoor" target="_blank">Ильназ Габбасович</Link>.
            </Div>
            <Div className="category-examples" mode="primary" multiline>Бьютификация</Div>
            <img
              className="img-gallery-examples"
              src={beautify}
            />
            <Div>
              <Link href="https://mask.vk.me/sample/beautify.zip" target="_blank">Beautify.zip </Link>
              — пример использования шейдера сглаживания кожи лица. Данный шейдер рекомендуется помещать самым первым слоем. Автор <Link href="https://vk.com/alex.podgayko" target="_blank">Александр Подгайко</Link>.
            </Div>
            <Div className="category-examples" mode="primary" multiline>Фильтры цветокоррекции</Div>
            <img
              className="img-gallery-examples"
              src={colorfilter}
            />
            <Div>
              <Link href="https://mask.vk.me/sample/colorfilter.zip" target="_blank">ColorFilter.zip </Link>
              — примеры использования фильтров цветокоррекции. Автор <Link href="https://vk.com/vitaliyzayats" target="_blank">Виталий Заяц</Link>.
            </Div>
            <Div className="category-examples" mode="primary" multiline>Изменение формы лица</Div>
            <img
              className="img-gallery-examples"
              src={liquifiedwarp}
            />
            <Div>
              <Link href="https://mask.vk.me/sample/liquifiedwarp.zip" target="_blank">LiquifiedWarp.zip </Link>
              — пример деформации лица с помощью эффекта пластики. Автор <Link href="https://vk.com/nkdesign" target="_blank">Никита Конюхов</Link>.
            </Div>
            <Div>
              <Link href="https://mask.vk.me/sample/lenswarp.zip" target="_blank">LensWarp.zip </Link>
              — примеры деформации лица с помощью эффекта линз. Автор <Link href="https://vk.com/nkdesign" target="_blank">Никита Конюхов</Link>.
            </Div>
          </div> : null}
          
          {this.state.activeTab === "plugins" ? <div>
            <Div className="tetle-examples">Плагины</Div>
            <Div className="category-examples" mode="primary" multiline>Particles</Div>
            <div className="block-video-gallery-examples">
              <video className="video-gallery-examples" autoPlay loop>
                <source src={particles} />
              </video>
            </div>
            <Div>
              Плагин позволяет создать простую систему частиц: боке, конфетти, падающие снежинки и другие.
              <br></br><br></br>
              Полный пример можно скачать <Link href="https://mask.vk.me/sample/particles.zip" target="_blank">здесь</Link>.
            </Div>
            <Div className="category-examples" mode="primary" multiline>RandomTest</Div>
            <div className="block-video-gallery-examples">
              <video className="video-gallery-examples" autoPlay loop>
                <source src={randomtest} />
              </video>
            </div>
            <Div>
              Плагин позволяет создавать маски для тестов вида «Кто ты из…?» с использованием вложенного набора текстур.
              <br></br><br></br>
              Полный пример можно скачать <Link href="https://mask.vk.me/sample/random_test_plugin.zip" target="_blank">здесь</Link>.
            </Div>
            <Div className="category-examples" mode="primary" multiline>CustomHint</Div>
            <div className="block-video-gallery-examples">
              <video className="video-gallery-examples" autoPlay loop>
                <source src={customhint} />
              </video>
            </div>
            <Div>
              Плагин позволяет показать кастомное всплывающее сообщение после запуска маски и является более гибким аналогом "user_hint" в mask.json.
              <br></br><br></br>
              Полный пример можно скачать <Link href="http://mask.vk.me/sample/custom_hint_plugin.zip" target="_blank">здесь</Link>.
            </Div>
            <Div className="category-examples" mode="primary" multiline>Spinner3D</Div>
            <div className="block-video-gallery-examples">
              <video className="video-gallery-examples" autoPlay loop>
                <source src={spinner3d} />
              </video>
            </div>
            <Div>
              Плагин вращает дубликаты 3D-модели вокруг головы.
              <br></br><br></br>
              Полный пример можно скачать <Link href="http://mask.vk.me/sample/spinner3d_plugin.zip" target="_blank">здесь</Link>.
            </Div>
            <Div className="category-examples" mode="primary" multiline>Parallax</Div>
            <div className="block-video-gallery-examples">
              <video className="video-gallery-examples" autoPlay loop>
                <source src={parallax} />
              </video>
            </div>
            <Div>
              Плагин создаёт эффект параллакса в зависимости от положения лица пользователя в камере.
              <br></br><br></br>
              Полный пример можно скачать <Link href="http://mask.vk.me/sample/parallax_plugin.zip" target="_blank">здесь</Link>.
            </Div>
            <Div className="category-examples" mode="primary" multiline>MaskSwitching</Div>
            <div className="block-video-gallery-examples">
              <video className="video-gallery-examples" autoPlay loop>
                <source src={maskswitching} />
              </video>
            </div>
            <Div>
              Плагин позволяет с помощью триггеров переключать эффекты. Таким образом можно создать несколько вариантов масок внутри одной.
              <br></br><br></br>
              Полный пример можно скачать <Link href="http://mask.vk.me/sample/mask_switching_plugin.zip" target="_blank">здесь</Link>.
            </Div>
            <Div className="category-examples" mode="primary" multiline>ReadConfiguration</Div>
            <Div>
              Плагин демонстрирует чтение параметров из PluginConfiguration.json.
              <br></br><br></br>
              Полный пример можно скачать <Link href="http://mask.vk.me/sample/read_configuration_plugin.zip" target="_blank">здесь</Link>.
            </Div>
            <Div className="category-examples" mode="primary" multiline>Пример использования нескольких конфигураций плагинов.</Div>
              <Div>
                На примере плагина Particles рассмотрим ситуацию, когда нужно сделать частицы с несколькими текстурами и разными параметрами.
                <br></br><br></br>
                Полный пример можно скачать <Link href="http://mask.vk.me/sample/different_particles.zip" target="_blank">здесь</Link>.
              </Div>
              <Div className="category-examples" mode="primary" multiline>Пример использования нескольких плагинов</Div>
              <Div>
                На примере плагинов Particles и MaskSwitching рассмотрим ситуацию, когда нужно, чтобы частицы разных текстур или параметров переключались по нажатию на экран.
                <br></br><br></br>
                Полный пример можно скачать <Link href="http://mask.vk.me/sample/switching_particular.zip" target="_blank">здесь</Link>.
              </Div>
          </div> : null}
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

export default connect(null, mapDispatchToProps)(ExamplePanel);
