import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout} from "../../store/router/actions";

import {
	Group,
	Panel,
	PanelHeader,
	Tabs,
	TabsItem,
	HorizontalScroll,
	Spacing,
	Div,
	Link,
	ContentCard,
	Header
} from "@vkontakte/vkui";

class DocPanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeTab: "newbie"
		};
	}

	render() {
		const {id} = this.props;

		return (
			<Panel id={id}>
				<PanelHeader
					separator={false}
				>
					Документация
				</PanelHeader>
				<Group>
				<Tabs>
            <HorizontalScroll
              showArrows
              getScrollToLeft={(i) => i - 120}
              getScrollToRight={(i) => i + 120}
            >
              <TabsItem
								onClick={() => this.setState({ activeTab: 'newbie' })}
								selected={this.state.activeTab === 'newbie'}
							>
								Новичку
							</TabsItem>
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
								Плагины и скрипты
							</TabsItem>
							<TabsItem
								onClick={() => this.setState({ activeTab: 'other' })}
								selected={this.state.activeTab === 'other'}
							>
								Другое
							</TabsItem>
              <TabsItem
                onClick={() => this.setState({ activeTab: 'video' })}
                selected={this.state.activeTab === 'video'}
              >
                Видеоуроки
              </TabsItem>
						</HorizontalScroll>
          </Tabs>
          <Spacing separator="top" />
					{this.state.activeTab === "newbie" ? <div>
						<Div>
							<Link href="https://vk.com/@msx-pervye-shagi" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Первые шаги</div>}
									text="Тут Вы узнаете с чего стоит начать"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-osnovy-sozdaniya-maski" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Основы создания маски</div>}
									text="Тут Вы узнаете с помощью каких программ можно писать маски и конфигурацию маски"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-fail-konfiguracii-maskjson" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Файл конфигурации mask.json</div>}
									text="Файл конфигурации mask.json является входной точкой для запуска маски. В данном файле описываются все необходимые параметры маски с помощью языка разметки JSON"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-kak-sozdat-masku-dlya-vk" target="_blank">
								<ContentCard
									image="https://sun9-58.userapi.com/impf/c850416/v850416878/41a1a/mimns2-OFgE.jpg?size=807x807&quality=96&sign=4924c4ab30fdfb26102c94b319346d69&type=album"
									className="text"
									header={<div>Как создать маску для ВКонтакте</div>}
									text="Хотите, чтобы Вашу авторскую маску примерили миллионы пользователей? Разместите её ВКонтакте. В статье мы подробно разберём, как это сделать. В данной статье подразумевается, что Вы умеете рисовать и знакомы с цифровой обработкой изображений"
									maxHeight={150}
								/>
							</Link>
						</Div>
					</div> : null}
					{this.state.activeTab === "effects" ? <div>
						<Header mode="primary">Эффекты</Header>
						<Div>
							<Link href="https://vk.com/@msx-effekty" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Эффекты</div>}
									text="Дополнить изображение камеры можно с помощью эффектов. Все эффекты перечисляются в файле конфигурации mask.json в поле ''effects'' : [...]"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-patch" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Patch</div>}
									text="patch — это 2D-плоскость с текстурой, которая может быть привязана к определённым точкам головы или экрана"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-facemodel" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Facemodel</div>}
									text="facemodel — текстура на поверхности лица. Другими словами, это трёхмерная маска, которая накладывается на лицо. Именно этой маске и назначается текстура"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-model3d" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Model3d</div>}
									text="model3d — трёхмерная модель"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-light" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Light</div>}
									text={<div>light — источник света для 3D моделей.
									<br></br><br></br>
									Если в файле конфигурации отсутствуют эффекты light, то по умолчанию используется направленный источник света, светящий вдоль оси Z (из камеры)</div>}
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Header mode="primary" multiline>Продвинутые возможности создания маски</Header>
						<Div>
							<Link href="https://vk.com/@msx-rasshirennye-parametry-tekstur-patch-i-facemodel" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Расширенные параметры текстур patch и facemodel</div>}
									text="Описание текстуры может быть простой строкой в виде пути к файлу или структурой с дополнительными параметрами"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-parametry-materialov-model3d" target="_blank">
								<ContentCard
									image="https://sun9-58.userapi.com/impf/c845321/v845321042/e6af9/wR4twmbRq0s.jpg?size=1024x887&quality=96&sign=641609dea7c2781bcca16571bc1087ff&type=album"
									className="text"
									header={<div>Параметры материалов model3d</div>}
									text={<div>Материал отвечает за то, как будет отображаться поверхность 3D-модели во время рендера.
									<br></br><br></br>
									Файл описания материала для 3D модели имеет формат .xml, который можно открыть в любом текстовом редакторе</div>}
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-sozdanie-environment-tekstury" target="_blank">
								<ContentCard
									image="https://sun9-28.userapi.com/impf/c845020/v845020573/b9da6/YtUup1vItdc.jpg?size=2048x1711&quality=96&sign=5ae8bda65e514554d3600d08931f21c9&type=album"
									className="text"
									header={<div>Создание Environment текстуры</div>}
									text="Для того, чтобы быстрее получать данную текстуру, разработали некоторые инструкции и шаблон для Blender, который превращает любое панорамное изображение 360 градусов в изображение, разбитое на следующие стороны куба: back, left, front, richt, top, bottom"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-invisible-occluder" target="_blank">
								<ContentCard
									image="https://sun9-41.userapi.com/impf/c848532/v848532729/173dc2/T53Hr0ZQxG8.jpg?size=1600x678&quality=96&sign=3ffb7ff56ac5293e3307d23ead20e835&type=album"
									className="text"
									header={<div>Invisible Occluder</div>}
									text="Invisible Occluder — так называется объект, который скрывает геометрию позади себя, но сам при этом является прозрачным"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Header mode="primary">Анимация</Header>
						<Div>
							<Link href="https://vk.com/@msx-animaciya-tekstury-patch-i-facemodel" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Анимация текстуры patch и facemodel</div>}
									text="Анимированная текстура для эффектов patch и facemodel представляет собой текстурный атлас из одинаковых по размеру кадров анимации, которые сгруппированы в таблицу MxN и идут последовательно слева направо и сверху вниз"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-animaciya-3d-modelei" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Анимация 3D моделей</div>}
									text="Эта статья предназначена для тех, кто умеет делать скелетную анимацию"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Header mode="primary">Дополнительные эффекты</Header>
						<Div>
							<Link href="https://vk.com/@msx-filtr-cvetokorrekcii" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Colorfilter</div>}
									text="Colorfilter — эффект фильтра цветокоррекции"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-sglazhivanie-kozhi-lica" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Beautify</div>}
									text="Beautify — эффект сглаживания кожи лица"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-zahvat-kasaniya-ekrana-tap" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Захват касания экрана (tap)</div>}
									text="Реакция на касание экрана делает маски куда более интересными и интерактивными. У Вас есть возможность представить вариацию элементов в рамках одной маски, а пользователю остаётся лишь выбрать то, что ему больше подходит. Обладая достаточным опытом в программировании, художник может, например, погрузить пользователя в какую-нибудь игру."
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-nalozhenie-maski-na-dva-lica" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Наложение маски на два лица</div>}
									text="Для активации режима наложения маски на два лица, необходимо в файле конфигурации mask.json добавить поле ''num_faces'' : 2"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-izmenenie-formy-lica" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Изменение формы лица</div>}
									text="Прежде, чем использовать данный эффект, необходимо добавить зависимые файлы в папку с маской"
									maxHeight={150}
								/>
							</Link>
						</Div>
					</div> : null}
					{this.state.activeTab === "plugins" ? <div>
						<Div>
							<Link href="https://vk.com/@msx-plugins" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Плагины</div>}
									text={<Div>Если вы разработали некоторый скрипт и хотите в дальнейшем использовать его в других масках, удобнее будет упаковать его в плагин.
										<br></br><br></br>
										Преимущества:
										<br></br><br></br>				
										плагин легче повторно использовать;
										плагин проще сопровождать в разработке.
										Учитывайте, что каждый плагин должен решать отдельную задачу.</Div>}
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-primery?anchor=plaginy-2" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Примеры готовых плагинов</div>}
									text="Тут вы найдете готовые плагины"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-skripty" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Скрипты</div>}
									text="Скрипты для масок пишутся на языке AngelScript — это C-подобный скриптовый язык. Если у Вас есть опыт программирования на C/C++/C#, то Вы без труда в нём разберетесь"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-kratkaya-ekskursiya-po-yazyku-angelscript" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>AngelScript</div>}
									text="Краткая экскурсия по языку AngelScript"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-drevo-sceny-urho3d" target="_blank">
								<ContentCard
									image="https://sun9-63.userapi.com/impf/c850232/v850232206/23b1/iNpOD-Pz0hM.jpg?size=509x274&quality=96&sign=98aa9dc2e96a1bcfef05e851c3bcca43&type=album"
									className="text"
									header={<div>Древо сцены Urho3D</div>}
									text="В Urho3D, как и во многих других 3D-движках, сцена представляет из себя дерево. Узлы дерева могут иметь трансформацию и набор компонентов"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-sobytiya" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>События</div>}
									text="События предоставляют механизм подписки на то или иное произошедшее действие в системе"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-otobrazhenie-raznyh-obektov-na-perednei-i-zadnei-kamere" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Отображение разных объектов на передней и задней камере</div>}
									text="В статье приведён пример файла конфигурации mask.json, где первые два эффекта должны отображаться на задней камере, а два последних на передней"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-perekluchenie-maski-po-tapu" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Переключение маски по тапу</div>}
									text="Переключение маски по тапу позволяет объединить несколько похожих по смыслу масок в одну. Прежде, чем изучать данный материал, Вы должны ознакомиться, как подключить в маску захват касания экрана"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-peredacha-centra-lica-v-sheider" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Передача центра лица в шейдер</div>}
									text="В данном примере маска инвертирует небольшую область в центре лица. Маска содержит один полноэкранный patch эффект, для отрисовки которого назначен шейдер DrawPoint"
									maxHeight={150}
								/>
							</Link>
						</Div>
					</div> : null}
					{this.state.activeTab === "other" ? <div>
						<Div>
							<Link href="https://vk.com/@msx-moderation" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Всё о модерации масок</div>}
									text="Перед тем как маска станет доступной друзьям и подписчикам, она должна пройти модерацию. Маска без модерации будет открываться только у автора"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-zapusk-test-mask-s-konsolu" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Запуск Test mask с консолью</div>}
									text="Если маска работает неправильно или вовсе не запускается, то полезно будет отследить её поведение или получить сообщение об ошибке с помощью вывода информации в консоль"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-programmnoe-obespechenie" target="_blank">
								<ContentCard
									image=""
									className="text"
									header={<div>Программное обеспечение</div>}
									text="В статье рассказывается, какое может понадобиться программное обеспечение для создания масок"
									maxHeight={150}
								/>
							</Link>
						</Div>
						<Div>
							<Link href="https://vk.com/@msx-rasprostranennye-problemy-pri-zagruzke-i-testirovanii-maski" target="_blank">
								<ContentCard
									image="https://sun9-51.userapi.com/impf/c855524/v855524168/93a1b/kZ1chcD5Xfc.jpg?size=1234x693&quality=96&sign=2f7fb4f4f47b30fa6969efc39056cf02&type=album"
									className="text"
									header={<div>Распространённые проблемы при загрузке и тестировании маски</div>}
									text="В статье собраны распространённые проблемы при загрузке и тестировании маски, а также, способы их решения"
									maxHeight={150}
								/>
							</Link>
						</Div>
					</div> : null}

					{this.state.activeTab === "video" ? <div>
						В разработке
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

export default connect(null, mapDispatchToProps)(DocPanel);
