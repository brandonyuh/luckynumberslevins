import './Content.scss';
import widget from '../../assets/icons/widget.svg';
import bigChart from '../../assets/images/bigchart.png';
import Card from '../../components/Cards/Cards';

function Content() {
   return (
      <main className='main'>
         <Card
            width={'500px'}
            height={'400px'}
            bgColor={'#ffffff'}
            imageSrc={bigChart}
            txtColor={'black'}
            imgheight={'300px'}
            fontSize={'2rem'}
            title='Bar Graph'
            text='Presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent.'
         />
         <div className='main__widget'>
            <img className='main__widget--img' src={widget} alt='add widget' />
            <p className='main__widget--text'>Add your first widget.</p>
         </div>
      </main>
   );
}

export default Content;
