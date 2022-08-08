import React, { Component } from 'react';
import { ListItem, List, Card, View, Text, Thumbnail, Body, Left, Container } from 'native-base';
import { ScrollView, Keyboard, Dimensions } from 'react-native';
import HeaderLogado from './HeaderLogado';
import GlobalStyles from './styles/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import NativeAdView, {
//   CallToActionView,
//   IconView,
//   HeadlineView,
//   TaglineView,
//   AdvertiserView,
//   NativeMediaView,
// } from 'react-native-admob-native-ads';


const window = Dimensions.get("window");

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buscaValue:''
    }
  }

  componentDidMount() {

    var _this = this;
      
      this._unsubscribe = _this.props.navigation.addListener('focus', () => {
        _this._fetchLuke();
      });

  }

  _fetchLuke = async () => {
    let history = await AsyncStorage.getItem('@data:key');
   
    if(history)
      this.setState({ buscaValue: history });
  }

  getData = () => {

    var data = new Date();

    var dia     = data.getDate();           // 1-31
    var dia_sem = data.getDay();            // 0-6 (zero=domingo)
    var mes     = data.getMonth();          // 0-11 (zero=janeiro)
    var ano2    = data.getYear();           // 2 dígitos
    var ano4    = data.getFullYear();       // 4 dígitos
    var hora    = data.getHours();          // 0-23
    var min     = data.getMinutes();        // 0-59
    var seg     = data.getSeconds();        // 0-59
    var mseg    = data.getMilliseconds();   // 0-999
    var tz      = data.getTimezoneOffset(); // em minutos

    var dias = new Array(
      'Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'
     );
    var dias2 = new Array(
      'Inicio','Janeiro' ,'Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'
     );

    // Formata a data e a hora (note o mês + 1)
    var str_data = dia + ' de ' + dias2[mes+1] ;

    // Mostra o resultado
    return dias[dia_sem]+', ' + str_data;

  }


  getVersiculo = () => {

  var d = new Date();
        var t = d.getTime();
        var days = Math.floor(t / (86400000));

        var biblico_array  = [
            'Se, com a tua boca, confessares Jesus como Senhor e, em teu coração, creres que Deus o ressuscitou dentre os mortos, serás salvo. - Romanos 10:9',
            'Antes, santificai a Cristo, como Senhor, em vosso coração, estando sempre preparados para responder a todo aquele que vos pedir razão da esperança que há em vós. - 1 Pedro 3:15',
            'Aquele que não conheceu pecado, ele o fez pecado por nós; para que, nele, fôssemos feitos justiça de Deus. - 2 Coríntios 5:21',
            'E, assim, se alguém está em Cristo, é nova criatura; as coisas antigas já passaram; eis que se fizeram novas. - 2 Coríntios 5:17',
            'Assim brilhe também a vossa luz diante dos homens, para que vejam as vossas boas obras e glorifiquem a vosso Pai que está nos céus. - Mateus 5:16',
            'Bem-aventurado o homem que suporta, com perseverança, a provação; porque, depois de ter sido aprovado, receberá a coroa da vida, a qual o Senhor prometeu aos que o amam. - Tiago 1:12',
            'Acheguemo-nos, portanto, confiadamente, junto ao trono da graça, a fim de recebermos misericórdia e acharmos graça para socorro em ocasião oportuna. - Hebreus 4:16',
            'É como o orvalho do Hermom, que desce sobre os montes de Sião. Ali, ordena o SENHOR a sua bênção e a vida para sempre. - Salmos 133:3',
            'Confessai, pois, os vossos pecados uns aos outros e orai uns pelos outros, para serdes curados. Muito pode, por sua eficácia, a súplica do justo. - Tiago 5:16',
            'Confia no SENHOR de todo o teu coração e não te estribes no teu próprio entendimento. - Provérbios 3:5',
            'Nisto conhecemos o amor: que Cristo deu a sua vida por nós; e devemos dar nossa vida pelos irmãos. - 1 João 3:16',
            'Mansidão, domínio próprio. Contra estas coisas não há lei. - Gálatas 5:23',
            'E, assim, a fé vem pela pregação, e a pregação, pela palavra de Cristo. - Romanos 10:17',
            'Deixo-vos a paz, a minha paz vos dou; não vo-la dou como a dá o mundo. Não se turbe o vosso coração, nem se atemorize. - João 14:27',
            'Agrada-te do SENHOR, e ele satisfará os desejos do teu coração. - Salmos 37:4',
            'Disse-lhe Jesus: Eu sou a ressurreição e a vida. Quem crê em mim, ainda que morra, viverá; - João 11:25',
            'Respondeu-lhe Jesus: Eu sou o caminho, e a verdade, e a vida; ninguém vem ao Pai senão por mim. - João 14:6',
            'E a paz de Deus, que excede todo o entendimento, guardará o vosso coração e a vossa mente em Cristo Jesus. - Filipenses 4:7',
            'É como o óleo precioso sobre a cabeça, o qual desce para a barba, a barba de Arão, e desce para a gola de suas vestes. - Salmos 133:2',
            'Criou Deus, pois, o homem à sua imagem, à imagem de Deus o criou; homem e mulher os criou. - Gênesis 1:27',
            'Também disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança; tenha ele domínio sobre os peixes do mar, sobre as aves dos céus, sobre os animais domésticos, sobre toda a terra e sobre todos os répteis que rastejam pela terra. - Gênesis 1:26',
            'Teve Paulo durante a noite uma visão em que o Senhor lhe disse: Não temas; pelo contrário, fala e não te cales; - Atos 18:9',
            'Respondeu-lhes Pedro: Arrependei-vos, e cada um de vós seja batizado em nome de Jesus Cristo para remissão dos vossos pecados, e recebereis o dom do Espírito Santo. - Atos 2:38',
            'Então, ele me disse: A minha graça te basta, porque o poder se aperfeiçoa na fraqueza. De boa vontade, pois, mais me gloriarei nas fraquezas, para que sobre mim repouse o poder de Cristo. - 2 Coríntios 12:9',
            'E não há salvação em nenhum outro; porque abaixo do céu não existe nenhum outro nome, dado entre os homens, pelo qual importa que sejamos salvos. - Atos 4:12',
            'E ali permaneceu um ano e seis meses, ensinando entre eles a palavra de Deus. - Atos 18:11',
            'Respondeu-lhe Jesus: Amarás o Senhor, teu Deus, de todo o teu coração, de toda a tua alma e de todo o teu entendimento. - Mateus 22:37',
            'E não vos conformeis com este século, mas transformai-vos pela renovação da vossa mente, para que experimenteis qual seja a boa, agradável e perfeita vontade de Deus. - Romanos 12:2',
            'Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito. - Romanos 8:28',
            'Jesus, aproximando-se, falou-lhes, dizendo: Toda a autoridade me foi dada no céu e na terra. - Mateus 28:18',
            'Tudo quanto fizerdes, fazei-o de todo o coração, como para o Senhor e não para homens - Colossenses 3:23',
            'Ele te declarou, ó homem, o que é bom e que é o que o SENHOR pede de ti: que pratiques a justiça, e ames a misericórdia, e andes humildemente com o teu Deus. - Miquéias 6:8',
            'Ensinando-os a guardar todas as coisas que vos tenho ordenado. E eis que estou convosco todos os dias até à consumação do século. - Mateus 28:20',
            'Logo, já não sou eu quem vive, mas Cristo vive em mim; e esse viver que, agora, tenho na carne, vivo pela fé no Filho de Deus, que me amou e a si mesmo se entregou por mim. - Gálatas 2:20',
            'Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós. - 1 Pedro 5:7',
            'Carregando ele mesmo em seu corpo, sobre o madeiro, os nossos pecados, para que nós, mortos para os pecados, vivamos para a justiça; por suas chagas, fostes sarados. - 1 Pedro 2:24',
            'Mas, a todos quantos o receberam, deu-lhes o poder de serem feitos filhos de Deus, a saber, aos que crêem no seu nome; - João 1:12',
            'Buscai, pois, em primeiro lugar, o seu reino e a sua justiça, e todas estas coisas vos serão acrescentadas. - Mateus 6:33',
            'Mas Deus prova o seu próprio amor para conosco pelo fato de ter Cristo morrido por nós, sendo nós ainda pecadores. - Romanos 5:8',
            'Mas ele foi traspassado pelas nossas transgressões e moído pelas nossas iniqüidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados. - Isaías 53:5',
            'Mas o fruto do Espírito é: amor, alegria, paz, longanimidade, benignidade, bondade, fidelidade. - Gálatas 5:22',
            'Mas os que esperam no SENHOR renovam as suas forças, sobem com asas como águias, correm e não se cansam, caminham e não se fatigam. - Isaías 40:31',
            'Mas recebereis poder, ao descer sobre vós o Espírito Santo, e sereis minhas testemunhas tanto em Jerusalém como em toda a Judéia e Samaria e até aos confins da terra. - Atos 1:8',
            'Meus irmãos, tende por motivo de toda alegria o passardes por várias provações - Tiago 1:2',
            'Em verdade, em verdade vos digo: quem ouve a minha palavra e crê naquele que me enviou tem a vida eterna, não entra em juízo, mas passou da morte para a vida. - João 5:24',
            'Não deixemos de congregar-nos, como é costume de alguns; antes, façamos admoestações e tanto mais quanto vedes que o Dia se aproxima. - Hebreus 10:25',
            'Não andeis ansiosos de coisa alguma; em tudo, porém, sejam conhecidas, diante de Deus, as vossas petições, pela oração e pela súplica, com ações de graças. - Filipenses 4:6',
            'Não cesses de falar deste Livro da Lei; antes, medita nele dia e noite, para que tenhas cuidado de fazer segundo tudo quanto nele está escrito; então, farás prosperar o teu caminho e serás bem-sucedido. - Josué 1:8',
            'Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a minha destra fiel. - Isaías 41:10',
            'Não to mandei eu? Sê forte e corajoso; não temas, nem te espantes, porque o SENHOR, teu Deus, é contigo por onde quer que andares. - Josué 1:9',
            'Não vos sobreveio tentação que não fosse humana; mas Deus é fiel e não permitirá que sejais tentados além das vossas forças; pelo contrário, juntamente com a tentação, vos proverá livramento, de sorte que a possais suportar. - 1 Coríntios 10:13',
            'Não de obras, para que ninguém se glorie. - Efésios 2:9',
            'Nem a altura, nem a profundidade, nem qualquer outra criatura poderá separar-nos do amor de Deus, que está em Cristo Jesus, nosso Senhor. - Romanos 8:39',
            'Ninguém tem maior amor do que este: de dar alguém a própria vida em favor dos seus amigos. - João 15:13',
            'Nisto conhecerão todos que sois meus discípulos: se tiverdes amor uns aos outros. - João 13:35',
            'No princípio, criou Deus os céus e a terra. - Gênesis 1:1',
            'No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus. - João 1:1',
            'O ladrão vem somente para roubar, matar e destruir; eu vim para que tenham vida e a tenham em abundância. - João 10:10',
            'E o meu Deus, segundo a sua riqueza em glória, há de suprir, em Cristo Jesus, cada uma de vossas necessidades. - Filipenses 4:19',
            'Oh! Como é bom e agradável viverem unidos os irmãos! - Salmos 133:1',
            'Olhando firmemente para o Autor e Consumador da fé, Jesus, o qual, em troca da alegria que lhe estava proposta, suportou a cruz, não fazendo caso da ignomínia, e está assentado à destra do trono de Deus.. - Hebreus 12:2',
            'Ora, a fé é a certeza de coisas que se esperam, a convicção de fatos que se não vêem. - Hebreus 11:1',
            'Ora, àquele que é poderoso para fazer infinitamente mais do que tudo quanto pedimos ou pensamos, conforme o seu poder que opera em nós. - Efésios 3:20',
            'Ora, estes de Beréia eram mais nobres que os de Tessalônica; pois receberam a palavra com toda a avidez, examinando as Escrituras todos os dias para ver se as coisas eram, de fato, assim. - Atos 17:11',
            'E o Deus da esperança vos encha de todo o gozo e paz no vosso crer, para que sejais ricos de esperança no poder do Espírito Santo. - Romanos 15:13',
            'De fato, sem fé é impossível agradar a Deus, porquanto é necessário que aquele que se aproxima de Deus creia que ele existe e que se torna galardoador dos que o buscam. - Hebreus 11:6',
            'Acaso, não sabeis que o vosso corpo é santuário do Espírito Santo, que está em vós, o qual tendes da parte de Deus, e que não sois de vós mesmos? - 1 Coríntios 6:19',
            'Pelas quais nos têm sido doadas as suas preciosas e mui grandes promessas, para que por elas vos torneis co-participantes da natureza divina, livrando-vos da corrupção das paixões que há no mundo - 2 Pedro 1:4',
            'Porque a palavra de Deus é viva, e eficaz, e mais cortante do que qualquer espada de dois gumes, e penetra até ao ponto de dividir alma e espírito, juntas e medulas, e é apta para discernir os pensamentos e propósitos do coração. - Hebreus 4:12',
            'Porque Deus amou ao mundo de tal maneira que deu o seu Filho unigênito, para que todo o que nele crê não pereça, mas tenha a vida eterna. - João 3:16',
            'Porquanto Deus enviou o seu Filho ao mundo, não para que julgasse o mundo, mas para que o mundo fosse salvo por ele. - João 3:17',
            'Porque Deus não nos tem dado espírito de covardia, mas de poder, de amor e de moderação. - 2 Timóteo 1:7',
            'Porque eu estou bem certo de que nem a morte, nem a vida, nem os anjos, nem os principados, nem as coisas do presente, nem do porvir, nem os poderes. - Romanos 8:38',
            'Eu é que sei que pensamentos tenho a vosso respeito, diz o SENHOR; pensamentos de paz e não de mal, para vos dar o fim que desejais. - Jeremias 29:11',
            'Porquanto eu estou contigo, e ninguém ousará fazer-te mal, pois tenho muito povo nesta cidade. - Atos 18:10',
            'Porque não temos sumo sacerdote que não possa compadecer-se das nossas fraquezas; antes, foi ele tentado em todas as coisas, à nossa semelhança, mas sem pecado. - Hebreus 4:15',
            'Porque o meu jugo é suave, e o meu fardo é leve. - Mateus 11:30',
            'porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna em Cristo Jesus, nosso Senhor. - Romanos 6:23',
            'Porque os meus pensamentos não são os vossos pensamentos, nem os vossos caminhos, os meus caminhos, diz o SENHOR. - Isaías 55:8',
            'Porque pela graça sois salvos, mediante a fé; e isto não vem de vós; é dom de Deus; - Efésios 2:8',
            'Pois somos feitura dele, criados em Cristo Jesus para boas obras, as quais Deus de antemão preparou para que andássemos nelas. - Efésios 2:10',
            'Pois todos pecaram e carecem da glória de Deus. - Romanos 3:23',
            'Ide, portanto, fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo; - Mateus 28:19',
            'Portanto, também nós, visto que temos a rodear-nos tão grande nuvem de testemunhas, desembaraçando-nos de todo peso e do pecado que tenazmente nos assedia, corramos, com perseverança, a carreira que nos está proposta, - Hebreus 12:1',
            'Tudo posso naquele que me fortalece. - Filipenses 4:13',
            'Finalmente, irmãos, tudo o que é verdadeiro, tudo o que é respeitável, tudo o que é justo, tudo o que é puro, tudo o que é amável, tudo o que é de boa fama, se alguma virtude há e se algum louvor existe, seja isso o que ocupe o vosso pensamento. - Filipenses 4:8',
            'Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas. - Provérbios 3:6',
            'Revesti-vos, pois, como eleitos de Deus, santos e amados, de ternos afetos de misericórdia, de bondade, de humildade, de mansidão, de longanimidade. - Colossenses 3:12',
            'Rogo-vos, pois, irmãos, pelas misericórdias de Deus, que apresenteis o vosso corpo por sacrifício vivo, santo e agradável a Deus, que é o vosso culto racional. - Romanos 12:1',
            'sabendo que a provação da vossa fé, uma vez confirmada, produz perseverança. - Tiago 1:3',
            'Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça. - 1 João 1:9',
            'Seja a vossa vida sem avareza. Contentai-vos com as coisas que tendes; porque ele tem dito: De maneira alguma te deixarei, nunca jamais te abandonarei. - Hebreus 13:5',
            'Estou plenamente certo de que aquele que começou boa obra em vós há de completá-la até ao Dia de Cristo Jesus. - Filipenses 1:6',
            'Estas coisas vos tenho dito para que tenhais paz em mim. No mundo, passais por aflições; mas tende bom ânimo; eu venci o mundo. - João 16:33',
            'Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção, para a educação na justiça. - 2 Timóteo 3:16',
            'Todos nós andávamos desgarrados como ovelhas; cada um se desviava pelo caminho, mas o SENHOR fez cair sobre ele a iniqüidade de nós todos. - Isaías 53:6',
            'Tomai sobre vós o meu jugo e aprendei de mim, porque sou manso e humilde de coração; e achareis descanso para a vossa alma. - Mateus 11:29',
            'Tu, SENHOR, conservarás em perfeita paz aquele cujo propósito é firme; porque ele confia em ti. - Isaías 26:3',
            'Certamente, ele tomou sobre si as nossas enfermidades e as nossas dores levou sobre si; e nós o reputávamos por aflito, ferido de Deus e oprimido. - Isaías 53:4  ',
            'Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei.  - Mateus 11:28'
        ];
        var i = days % biblico_array.length;

        return biblico_array[i];
      }

      
  render() {
  return (
    <Container>
      <HeaderLogado navigation={this.props.navigation} cabecalho="Bíblia Sagrada" />
      <View
        style={GlobalStyles.container}>
        <ScrollView keyboardShouldPersistTaps='always'>

          <Card style={{ width: window.width * 0.95 }}>
            <List>
              <ListItem thumbnail>
                <Body>
                  <Text note numberOfLines={6}>{this.getData()}</Text>
                  <Text style={{ fontSize: 24, color: '#000', fontWeight: 'bold' }}>Bom dia</Text>
                </Body>
              </ListItem>
            </List>
          </Card>
          <Card style={{ width: window.width * 0.95 }}>
            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={require('./Images/brasao.png')} />
                </Left>
                <Body>
                  <Text style={{ fontSize: 14, color: 'blue', fontWeight: 'bold' }}>Versículo do Dia{'\n'}</Text>
                  
                  <Text note numberOfLines={6}>"{this.getVersiculo()}"</Text>
                </Body>
              </ListItem>
            </List>
          </Card>
          {this.state.buscaValue != '' && 
            (<View><Card style={{ width: window.width * 0.95 }}>
              <List>
                <ListItem thumbnail>
                  <Body>
                    <Text style={{ fontSize: 16, color: 'purple'}}>Você parou em...</Text>
                    <Text style={{ fontSize: 23 }} >{this.state.buscaValue}</Text>
                  </Body>
                </ListItem>
              </List>
            </Card></View> : null)
          } 
              </ScrollView>
      </View>

    </Container>
  );
        }
}
