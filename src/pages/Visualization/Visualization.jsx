import HeaderPage from '../../components/HeaderPage/HeaderPage';
import Cards from '../../components/Cards/Cards';
import './Visualization.scss';
import graphOne from '../../assets/images/graph-1.png';
import graphTwo from '../../assets/images/graph-2.png';
import graphThree from '../../assets/images/graph-3.png';
import graphFour from '../../assets/images/graph-4.png';
import graphFive from '../../assets/images/graph-5.png';
import graphSix from '../../assets/images/graph-6.png';
import graphSeven from '../../assets/images/graph-7.png';
import graphEight from '../../assets/images/graph-8.png';
import graphNine from '../../assets/images/graph-9.png';
import graphTen from '../../assets/images/graph-10.png';
import graphEleven from '../../assets/images/graph-11.png';
import graphTwelve from '../../assets/images/graph-12.png';

function Visualization() {
   return (
      <>
         <HeaderPage title='Data Visualization' subtitle='3. Choose the type of visual representation you want for your data.' />

         <div className='container-visualization'>
            <h1 className='container-visualization__text'>Recommended for you based on your data</h1>
            <div className='card-container'>
               <Cards
                  bgColor={'#188187'}
                  imageSrc={graphOne}
                  title='Bar Graph'
                  text='Presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent.'
               />
               <Cards
                  bgColor={'#188187'}
                  imageSrc={graphTwo}
                  title='Pie Graph'
                  text='A circular statistical graphic, which is divided into slices to illustrate numerical proportion.'
               />
               <Cards
                  bgColor={'#188187'}
                  imageSrc={graphThree}
                  title='Line Chart'
                  text='Two-dimensional chart with an X and Y axis, each point representing a single value. The data points are joined by a line to depict a trend, usually over time.'
               />
               <Cards
                  bgColor={'#188187'}
                  imageSrc={graphFour}
                  title='Area Chart'
                  text='A graph that combines a line chart and a bar chart to show changes in quantities over time.'
               />
            </div>

            <h1 className='container-visualization__text'>Others</h1>
            <div className='card-container'>
               <Cards
                  bgColor={'#CCEEFC'}
                  txtColor={'#202B3E'}
                  imageSrc={graphFive}
                  title='Area Chart'
                  text='A graph that combines a line chart and a bar chart to show changes in quantities over time.'
               />
               <Cards
                  bgColor={'#CCEEFC'}
                  txtColor={'#202B3E'}
                  imageSrc={graphSix}
                  title='Scatter Plot'
                  text='Uses dots to represent values for two different numeric variables.'
               />
               <Cards
                  bgColor={'#CCEEFC'}
                  txtColor={'#202B3E'}
                  imageSrc={graphSeven}
                  title='Gantt Chart'
                  text='A bar chart that illustrates a project schedule.'
               />
               <Cards
                  bgColor={'#CCEEFC'}
                  txtColor={'#202B3E'}
                  imageSrc={graphEight}
                  title='Tree Map'
                  text='A visualization composed of nested rectangles.'
               />
            </div>

            <div className='card-container'>
               <Cards
                  bgColor={'#CCEEFC'}
                  txtColor={'#202B3E'}
                  imageSrc={graphNine}
                  title='Histograms'
                  text='A histogram divides up the range of possible values in a data set into classes or groups.'
               />
               <Cards
                  bgColor={'#CCEEFC'}
                  txtColor={'#202B3E'}
                  imageSrc={graphTen}
                  title='Waterfall Charts'
                  text='A waterfall chart shows a running total as values are added or subtracted.'
               />
               <Cards
                  bgColor={'#CCEEFC'}
                  txtColor={'#202B3E'}
                  imageSrc={graphEleven}
                  title='Gauge Charts'
                  text='A gauge chart use needles to show information as a reading on a dial.'
               />
               <Cards
                  bgColor={'#CCEEFC'}
                  txtColor={'#202B3E'}
                  imageSrc={graphTwelve}
                  title='Spider Charts'
                  text='A graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point.'
               />
            </div>
         </div>
      </>
   );
}

export default Visualization;
