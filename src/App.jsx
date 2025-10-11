import Logo from './assets/0c80faac-15d0-4a16-b443-c94e903f8e3a.png'
import './App.css'
import { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

import First from './assets/768581b4-4174-4084-a533-cbea7259fbe0.png'
import Second from './assets/12fc2ef6-171a-47fb-a420-2fc4f38a1284.png'
import Random1 from './assets/87bb1219-931d-4d91-b89e-bc11b48ae9e7.webp'

// regalos
import Random3 from './assets/209804dc-719c-41fb-8439-d9ddd2667422.mp4'
import Random4 from './assets/072fb61d-75b4-40f4-a4c5-14bb2c17598b.mp4'

import Random2 from './assets/4d32017e-98ce-4422-bdcf-a5a34f6661c3.gif'

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown'
import '@leenguyen/react-flip-clock-countdown/dist/index.css'

function App () {
  const isMobile = window.innerWidth < 600
  const [targetDate] = useState(new Date('2025-10-13T00:00:00'))
  const [gifts] = useState([Random3, Random4])
  const [stateCount, setStateCount] = useState(false)
  const [showGift, setShowGift] = useState(undefined)
  const [showTroll, setShowTroll] = useState(false)
  const [showSection, setShowSection] = useState(false)
  const [firstGiftOpened, setFirstGiftOpened] = useState(false)
  const { width, height } = useWindowSize()

  const abrirPrimerRegalo = () => {
    setShowGift(gifts[0])
    setFirstGiftOpened(true)
  }

  const abrirSegundoRegalo = () => {
    if (firstGiftOpened) {
      setShowGift(gifts[1])
    } else {
      setShowTroll(true)
      setTimeout(() => {
        setShowTroll(false)
      }, 3000)
    }
  }

  const cambiarVista = () => {
    document.querySelector('.cuenta-regresiva')?.classList.remove('show')
    document.querySelector('.saludo')?.classList.add('show')
  }

  console.log('Si tenes idea de esto, no seas mogul y no hagas spoiler c:')
  console.log('poto')

  useEffect(() => {
    cambiarVista()
  }, [stateCount])

  return (
    <div className='App'>
      <div className='container'>
        {!stateCount && <h2>CONTADOR CYBERCUMPLE</h2>}
        <FlipClockCountdown
          className='cuenta-regresiva show'
          to={targetDate}
          onComplete={() => {
            setStateCount(true)
          }}
          labels={['DÍAS', 'HORAS', 'MINUTOS', 'SEGUNDOS']}
          digitBlockStyle={
            isMobile
              ? {
                  width: '35px',
                  height: '45px',
                  fontSize: '1.7rem',
                  backgroundColor: '#1a1a1a',
                  color: '#DBE2E9',
                  borderRadius: '8px'
                }
              : {
                  width: '80px',
                  height: '110px',
                  fontSize: '5.5rem',
                  backgroundColor: '#1a1a1a',
                  color: '#DBE2E9',
                  borderRadius: '8px'
                }
          }
          separatorStyle={
            isMobile
              ? { color: '#fff', fontSize: '2rem' }
              : {
                  color: '#fff',
                  fontSize: '4rem'
                }
          }
          labelStyle={
            isMobile
              ? { fontSize: '0.7rem', color: '#DBE2E9', marginTop: '0.2rem' }
              : {
                  fontSize: '1.3rem',
                  color: '#DBE2E9',
                  marginTop: '0.5rem'
                }
          }
        />
        {/* {!stateCount && (
          <button
            onClick={() => {
              setStateCount(true)
            }}
          >
            Acelerar proceso
          </button>
        )} */}
        {stateCount && (
          <div className='saludo'>
            <Confetti width={width} height={height} />
            <div className='carta'>
              {!showSection && (
                <>
                  <img
                    className='logo-principal'
                    src={Logo}
                    alt='Logo de Cybernahir'
                  />
                  <h1>
                    FELIZ CUMPLEAÑOS{' '}
                    <img
                      className='nombre-img'
                      src={First}
                      alt='Logo de Cybernahir'
                    />
                    !
                  </h1>
                  <br />
                  <p>
                    De parte de la <span className='destacados'>CYBERCREW</span>
                    💜 te queremos mandar un abrazo enorme por tu cumpleaños,
                    esperamos que pases un excelente día de cumpleaños y que sea
                    especial.
                    <br />
                    <br />
                    Estamos enormemente agradecidos con vos por haber formado
                    esta hermosa comunidad de la que tanto los{' '}
                    <span className='destacados'>NODOS</span>,{' '}
                    <span className='destacados'>SATURNALES</span> y{' '}
                    <span className='destacados'>CROMOS</span> disfrutamos día a
                    día.
                    <br />
                    <br />
                    Sin tu esfuerzo, trabajo y dedicación esto no existiría.
                    Gracias a vos conocimos personas excelentes con la que
                    jugamos, hablamos y se crea un buen momento en llamada.
                    <br />
                    <br />
                    La idea no es ponerse sentimentales, pero creemos que cada
                    tanto es lindo recordarte lo que significas para nosotros,
                    tanto vos como tu trabajo.
                    <br />
                    <br />A continuación, te dejamos 2 regalitos (aparte del que
                    esta llegando 🚚...) para que abras.
                  </p>
                  <div className='bottom'>
                    <button
                      className='btn'
                      onClick={() => setShowSection(true)}
                    >
                      Ver Regalos
                    </button>
                  </div>
                </>
              )}

              {showSection && (
                <>
                  <img src={Random2} alt='Logo de Cybernahir' />
                  <h3>Hace click en los regalos para abrirlos</h3>
                  <div className='regalos'>
                    <div className='regalo'>
                      <h4>Regalo 1</h4>
                      <img
                        onClick={() => abrirPrimerRegalo()}
                        className='regalo-box'
                        src={Random1}
                        alt='Logo de Cybernahir'
                      />
                    </div>
                    <div className='regalo'>
                      <h4>Regalo 2</h4>
                      <img
                        onClick={() => abrirSegundoRegalo()}
                        className='regalo-box'
                        src={Random1}
                        alt='Logo de Cybernahir'
                      />
                    </div>
                  </div>

                  {showGift && (
                    <div className='ver-regalos'>
                      <button
                        onClick={() => setShowGift(undefined)}
                        className='btn-close'
                      >
                        X
                      </button>
                      <video
                        preload='none'
                        className='video'
                        src={showGift}
                        controls
                      ></video>
                      <small>
                        ⚠️Advertencia⚠️: Bajale un poco el volumen, no nos
                        hacemos cargo de daños en los tímpanos.
                      </small>
                    </div>
                  )}
                  {showTroll && (
                    <div>
                      <p>Tenés que abrir el primer regalo </p>
                      <div className='troll'>
                        <img
                          className='meme'
                          src={Second}
                          alt='Logo de Cybernahir'
                        />
                        <img
                          className='meme'
                          src={Second}
                          alt='Logo de Cybernahir'
                        />
                        <img
                          className='meme'
                          src={Second}
                          alt='Logo de Cybernahir'
                        />
                      </div>
                    </div>
                  )}
                  <button className='btn' onClick={() => setShowSection(false)}>
                    Volver
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
