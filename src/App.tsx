import React, { useState, useEffect, useRef } from 'react';
import ModalDialog from './components/ModalDialog';
import ImageMapper from 'react-img-mapper';
import './App.css';
import Display from './assets/display.png'
import FirstImg from './assets/1.jpg'
import SecondImg from './assets/2.jpg'
import ThirdImg from './assets/3.jpg'
import FourthImg from './assets/4.jpg'
import FifthImg from './assets/5.jpg'
import SixthImg from './assets/6.jpg'
import SeventhImg from './assets/7.jpg'
import EighthImg from './assets/8.jpg'

type SizeProps = {
  clientHeight: number
  clientWidth: number
}

function App() {
  const [message, setMessage] = useState<string>('')
  const [image, setImage] = useState<any>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [size, setSize] = useState<SizeProps>({
    clientWidth: window.innerWidth,
    clientHeight: window.innerHeight
  })
  const ref = useRef<HTMLDivElement>(null)

  const positionWidth = (separator: number) => {
    return size?.clientWidth / separator
  }
  const positionHeight = (separator: number): number => {
    return size.clientHeight / separator
  }

  const resizeHandler = () => {
    if (ref.current) {
      const { clientHeight, clientWidth } = ref.current;
      setSize({ clientHeight, clientWidth });
    } else {
      setSize({
        clientWidth: window.innerWidth,
        clientHeight: window.innerHeight
      })
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [window])

  const MAP = {
    name: "my-map",
    areas: [
      {
        name: "1",
        shape: "poly",
        coords: [
          positionWidth(1.465),positionHeight(12.52),
          positionWidth(3.157),positionHeight(12.52),
          positionWidth(3.157),positionHeight(8.22),
          positionWidth(1.465),positionHeight(8.22)
        ],
        strokeColor: 'rgba(222, 222, 222, 0.1)',
        preFillColor: "rgba(222, 222, 222, 0.2)",
        fillColor: "rgba(222, 222, 222, 0.5)",
        title: 'Battery Cells',
        url: FirstImg,
      },
      {
        name: "2",
        shape: "poly",
        coords: [
          positionWidth(1.82),positionHeight(7.32),
          positionWidth(2.24),positionHeight(7.32),
          positionWidth(2.24),positionHeight(5.32),
          positionWidth(1.82),positionHeight(5.32)
        ],
        strokeColor: 'rgba(222, 222, 222, 0.1)',
        preFillColor: "rgba(222, 222, 222, 0.2)",
        fillColor: "rgba(222, 222, 222, 0.5)",
        title: 'Battery Module Connector',
        url: SecondImg,
      },
      {
        name: "3",
        shape: "poly",
        coords: [
          positionWidth(1.373),positionHeight(4.2),
          positionWidth(3.67),positionHeight(4.2),
          positionWidth(3.67),positionHeight(3.55),
          positionWidth(1.373),positionHeight(3.55)
        ],
        strokeColor: 'rgba(222, 222, 222, 0.1)',
        preFillColor: "rgba(222, 222, 222, 0.2)",
        fillColor: "rgba(222, 222, 222, 0.5)",
        title: 'Intercell Connect Board (ICB)',
        url: ThirdImg,
      },
      {
        name: "4",
        shape: "poly",
        coords: [
          positionWidth(1.368),positionHeight(3.25),
          positionWidth(3.72),positionHeight(3.25),
          positionWidth(3.72),positionHeight(2.52),
          positionWidth(1.368),positionHeight(2.52)
        ],
        strokeColor: 'rgba(222, 222, 222, 0.1)',
        preFillColor: "rgba(222, 222, 222, 0.2)",
        fillColor: "rgba(222, 222, 222, 0.5)",
        title: 'Cell Contacting System (ZKS)',
        url: FourthImg,
      },
      {
        name: "5",
        shape: "poly",
        coords: [
          positionWidth(1.142),positionHeight(2.28),
          positionWidth(7.6),positionHeight(2.28),
          positionWidth(7.6),positionHeight(1.9),
          positionWidth(1.142),positionHeight(1.9)
        ],
        strokeColor: 'rgba(222, 222, 222, 0.1)',
        preFillColor: "rgba(222, 222, 222, 0.2)",
        fillColor: "rgba(222, 222, 222, 0.5)",
        title: 'Battery Disconnect Unit (BDU)',
        url: FifthImg,
      },
      {
        name: "6",
        shape: "poly",
        coords: [
          positionWidth(1.523),positionHeight(1.76),
          positionWidth(2.66),positionHeight(1.76),
          positionWidth(2.66),positionHeight(1.665),
          positionWidth(1.523),positionHeight(1.665)
        ],
        strokeColor: 'rgba(222, 222, 222, 0.1)',
        preFillColor: "rgba(222, 222, 222, 0.2)",
        fillColor: "rgba(222, 222, 222, 0.5)",
        title: 'HV Plugboard with 2 Busbars',
        url: SixthImg,
      },
      {
        name: "7",
        shape: "circle",
        coords: [
          positionWidth(1.83),
          positionHeight(1.52),
          20,
        ],
        strokeColor: 'rgba(0, 0, 0, .2)',
        preFillColor: "rgba(222, 222, 222, 0.2)",
        fillColor: "rgba(222, 222, 222, 0.5)",
        title: 'High Voltage Harness (EDS)',
        url: SeventhImg,
      },
      {
        name: "8",
        shape: "poly",
        coords: [
          positionWidth(1.595),positionHeight(1.275),
          positionWidth(2.68),positionHeight(1.275),
          positionWidth(2.68),positionHeight(1.2),
          positionWidth(1.595),positionHeight(1.2)
        ],
        strokeColor: 'rgba(222, 222, 222, 0.1)',
        preFillColor: "rgba(222, 222, 222, 0.2)",
        fillColor: "rgba(222, 222, 222, 0.5)",
        title: 'Integrated Power Module (IPM)',
        url: EighthImg,
      },
    ]
  }

  return (
    <div className="container" ref={ref}>
      <div className="list">
        <ImageMapper
          map={MAP}
          src={Display}
          onClick={(area: any ) => {
            setMessage(String(area?.title))
            setIsOpen(true)
            if (area?.url) {
              setImage(area?.url)
            }
          }}
        />
      </div>
      <ModalDialog
        onClose={() => {
          setIsOpen(false)
          setMessage('')
          setImage(null)
        }}
        isOpen={isOpen}
        title={message}
        url={image}
      />
    </div>
  )
}

export default App;
