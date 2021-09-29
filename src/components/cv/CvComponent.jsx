import React from "react";
import ContentLayout from "../../components/common/ContentLayout";

const CvComponent = () => {
  return (
    <>
      <ContentLayout>
        <h1 className="header mb">Programmering</h1>
        <div className="container">
          <p className="text mnd">Februar 2018</p>
          <div>
            <p className="text mb">
              Jeg begynner med programmering. Jeg starter med Swift som er
              programmeringsspråket til Apple. Dette begrenser seg til Apples
              produkter. Jeg holder på med dette i ca 6 måneder. Jeg innser at
              jeg må investere mye tid for å lære dette og begynner å tenke på
              at jeg burde lært noe som det kan være lettere å få jobb innen enn
              dette hvis det skulle bli aktuelt en dag.
            </p>
            <img
              className="img"
              src="https://bergquester.github.io/img/swiftlogosmall.png"
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <p className="text mnd">August 2018</p>
          <div>
            <p className="text mb">
              Etter å ha undersøkt om noe annet programmeringsspråk så ender jeg
              opp med å prøve JavaScript. Etter litt kursing i Javascript så
              blir det også CSS og HTML. Jeg tar også et kurs i Bootstrap. Alle
              kurs blir i hovedsak tatt på Udemy.
            </p>
            <img
              className="img css"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADFCAMAAACsN9QzAAABIFBMVEX///8VcrbkTybr6+vxZiozqdwAAAATExMAaLLjQADO3u3419ATb7Q0q90AarPrXCgnkszoVifCwsIyMjLr8fIMDAweg8EnJyfxYR/kSRxTtOD39/c7grzwWw3mh3LJ1uH1nHzq3drycD7kRhLc3Nx/f3+cnJzd8PnpwrzkWjnw+fz+8e3Jyckse7rb4+daWlrkVC4bGxtLS0tycnKRkZGGhobX19frgmtZk8bys6b1xLn+9PAmJiYaGhq3t7dtbW21zeTwqJnpdlrotKqFx+gsnNOy2/DobU/nlILxajH3rJL5wK14weWXudn539n30cmnw95BQUHhLgAAX65jmsp9qdFJn9HzfVD0j2nC4/PpcVT3tJ+IrdPnpZf0hlzleGGkL0L8AAAN80lEQVR4nO2ceVvbuBaHlWQICRjDQFoIYSkNSwmEQhdKS0uhlKULhHbgdqPD9/8W147sRDqypXNkzNPnXv3+meBxLb+ybL9WTsyYi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLy/9FlgcnJyffLHc/T7wOPpcXWWkw/NDP1lvGnr8JPryeiP7V063wr0nGGuVwhfIt7UxjQszkM8ZKb6RFE6+DPS29nlDWs85yOQzfwmD3c8BfBnnM2FJZWHE9Wh7yRx9uJY3yPSHl5wGrtCRYtpyw7HmGJkX+LTN/8H97K+bBPyiE8w9K4fxg2V3yPwnWexYvz59/8U/jL+8J/zsn/njzS90zIqYsx3va2CrLy5YyNEnmL7PHOfOXx9d5wnNtm3fAvcnFUjcN1r0AdPG3omWlDE1yfn6VLUf8rLvRJ/xwRw30+b+U8+ZviMvWozHxWFi2yDug/CV7k8vwWPMrXBB+mNejv5aU9e6In41HHfBWWLYdLXuSuck/n5/tRbBPhWXjCaPCKjT+CfkcuBv+YB/V63xSp9iExj8edcD2nfKz5xGsKHpxp2S5+DMq/zoH3yvdLT97GsHuCcueJXQKPZx/aXF7e3vxjfn4d//7JLgAy/xPed7upTWDSyp/YgfEo2I5S5OcX77/8yTzhw8JJYU/TsbByPnvPeH5Erre227HLi1FyhPuT+NptCxSo3KWXifzr4f9nSv/4L1oa897DZVj47s3yfp6Fi/bytAkmZ+F6+bLL3g9dP17EwnLJjM0SecP87/Gz++sZYn/icT/9G744dYWyyCvmfp4MpihycW98SCcOfw0vhdffde7f8XPFtvSX43uvwp7g3+Is51hT3p7IG6tMQ6ynrBs3LxhFxcXFxcXF8bWhvPNrnEPakP5pqVt/dXXap75Omzk3/+nkmf+GdK2Plwt5pnqmpF/qFLIM5WatvW1nPmN+GwlX35fP/7Xmrny1838LT9X/oK+9Uau+MVVM38jV3pvxtD8Zp749Xdmftb28uTfMbR+Us+T/wWCf4bI76ESr3xpaP2Gxv83MhH/KYJ/h8bfvo9KO+K/MrQ+R+Mf/QuVUb528wDBf0Xi98ZGUBnjq/tnhtYPaDcAIv8rBP8Z6QYQ8A8gMnKf96p/YWj9ZS780fivdhD8F7ny7xtaf5Urv1l/AwHOhT86/yt6/SULMJI/Whuhv1QBRvPz42/QX8bOc+VP+AZPCU2AkfwD8ep6/SULMI0fob/BA3Ae4z/mL5iOQCOX+1+0NkJ/gwcACj6Sf2SAD3+vbWyehE/jr//E8LN2Dsf/KOI36T9jqznwR7d/lP4mCLBWbMdQwz/mN+k/Y+/ACVDXZkobyI/RX1WA2zO6/Gdal3hwjEX8Jv1VBLj+bk6XB9p8k/lR+svYpczvnzVKmugvaMfR+Y/VX0WAm4etmib628nHKZn/EMV/Ld8AvGsdfkl/Q38f8yP1VxHg5u+afe9/j/gj/UPpvyLA3mUG/s8RP1Z/FQGuz2Xgj8c/RX8VAfZmtONfzz8d8/NtGfVXEeD6TQb+D/LtH6W/gQAD/nYG/uj619P/FWPrQIDrPzPwTwF+87cfYTagAOt2AMc/UIiu/yb9VWfAV7Wta/l3Z2X+Ikb/EwR4w5q/Fd//402Z+RvwAciefw3wo/Q32Glw//dvgT/apFl/GQMPQM0Fa/5zmb9+guNn4PBX5q35V8j6q8yAV+35O7Oy/t0g+cEMuL9vzf+DrL+M/ZQFsNqx5v8E+OeQ/ECA/QvrPTgG/Gb9VQS4+Ui8AQD907f+C+gfTn8VAfau5zUZWgERL3E9/Y30x6y/jJ0C/kOBf+ERSGe4k5rhB0D/XiL5r8EF0PPTU4HPf0c/hC3R9Vd9ABAEuPb7a1POrC7x7Z+mv7QZcPX5X1Qcuv6qAnwq8D+Cs2Oo53/K7HcYygy4yi+Of7r+BldtIIAvhPHfgXKA4o+vpOdI/qFb54/1dwPROhTgd+L5n4kfp/+0GXCVX9wS0F/fNPsdRifAmfjrOP0PrCXL8R8RNgT110MJuEaAa1n4N5H4igCT+KeT+OMNopoHjFWRv2jPj9ZfRYBJ/J+F7UT6S5j9DqMR4Bosj8Dwx/qHKf7gIcyAK/zvhe3Y6K9SAlIdFvhheQSFH6u/pBIQhf9Y2I6N/moFuHZqz4/WX0WA9fwDRv6e/l2jWtcIcO20ac+P1V9VgAGyGB/wa/UXo/96AT7cXJXyUJN49o+qvwYB9uc3pLTkiNux0V/GDtMFGD7/aX3iX/nxB62/BgH25ekQ3S7Y6K8qwLoZcJ1QPJSPP1p/DSUgYDoAw48t/uChzIDr+O1mv8NoBdg/Q/PHt4ZoQsk3z36HUQTYjn8XzH6j9dcgwOD7MA1/A+ivj2udMgOs4Yezv2j9NdRAg+/DNPxQf5H8OgEm8J/bzX53o+Xfkb4P0vDb6S9pBljDD2d/ccUfPBp8+H2Yht9Of7UCTOCHs7+44g8erQB7u5b8ptrnOC+gANvxg9lfXPEHj7YGuiLtgYYf6K+H01/9DDCeHxY/4PXXUAMtfx+m4bfTX60AE/jh7Ddef40CTOSn6a9SAlI/XUjNmhxxK/b6a5oBbos5mpbq3BNnv6N+w+mfIsDFejM1YMZf7ABY/IHXX0oNNHj+PdLN/mL5CTXQ8vPvlLgVe/2lzACD+Y8jcSu94o+o9hmnv6QaaJn/g7ARqL9NvP5SaqDh/I+4lWjRSLRqBdv6ri3/N2EjUH+LBHzWsuWXZn+PZP1F88MSCCz/1HdhG1B/CfofBPIn/ZYriT9h9pdU/MEDfwS4KUTH/0DYRsey+IMHlsCItzxpdhDw62Z/McUfPFCAF/o1oC15Bljm/yVs41UG/VUEWCoBubLkx+qvIsBVQYBrcxr+T8I2gP4ia5/j6EpArjX8SbPf+NrnOPgZcIl/VlQ8qL/42e8wQIA9cc5HkiPAnzj7G/UhVn+DBwBdCUQznV+sb32QQf/VGugrgX9fwy/e4qH+Yoo/eGANtFgCcajhFxXvewb91ddAz1dw/HD2G6t/lBIQmV/SX8BP0V+1BnoHx38r+qvOgIszwLIcy9c/cRvx7HfRih8IsNcW+Dc0/OI2bPVXLQE5SS0Bkf1P2EQm/U0QYIG/pBn/4jaiRT39xVUfd3ceCrA4AZDKPyXpP9C/JglfEWBpzufS830vkV+8/cf6O0Kc/Q0DBLgq8p+uNpt1hX9qdupf8fYH9Zek/0wR4Io459MozV/PeH5XhPv808fyALfXX/0McK22cDi3WeV9MMrZZ799BL/tGM6kv4oAKzXQjY39q3YwDPjz//T7H0plu03tcxxFgOXGa7XSwu+bYtAHowH7wwev1JMb6i+29jmOToD7V8KLy8L9kc8qexh7/VXegpFUAx30Qef3z9Hvn5LnNeDsN01/0TXQjVJqSZ+9/hpqoMU+SL2mZtNfRYDBl55iD6RtwV5/1Rnwl2kzwKmt29Y+xwElIJIAE/nJ+qsK8AGZH+ovZfY7zBn2R4Cpe2BX/MGjEWBk61B/cT/960cnwLg9sCv+4NHVQONaz6a/hB8Bpu6Bvf6qM8Cr4eWe0vqa3U//+oEz4F7h8iLxd2CJe9A6/hzbT09/zT99E3Zf+Qbk5+/hpD5IbH3447fYfnr8RHxWU2aAPb8yc63+FEzdgx/vpwUlttFftqvMANeb1c0Xhws10AdK62ufvk/1fvhhrf9MnQHudoFXKeyczWv2YKV/4DPob8pr4II+WD19JA0DqfXdzoOHsyJ8X38pxR88CfjxMGhf7W801D1o/Xif8C4MG/1Nfw1cvV6tvxNOhX7r57++QfYM+qstgfCCZ5+ZYBg0hD1YOZ5W2W31V30LBjwV5sJTodd6MOj/mp1S4DPor/E1cMEjcHhF3A33oKUOepWfor/KDHhCHzS7p0Kwaufjh4QDL/OT9RdVAx30wcz10PuUAw/0D1v8wQPrvJOHQfPmIGnQC7HVX+xr8JT651R+iv6iXwNXTxz0CfxU/UX/CND0/h8r/cW/Bs5U/26rv+gSCDM/X4+kv2oJSFZ+qv7eHj/+zRdisCUQev7RCJ9W/MGDLAHR8Y+MDBxFh5+mv/j3QKfzj/bgixb6myTAFP6RkH2sXei/+JXWuirAJH6RPQzqxXdyGhn4A/ix+wWpUIKmv+j3QCfwQ/ailf5ifwSo/v4zHPRtD9w9ifqLfg0c4B9NgC9a6S/2PdAy/8gIH/TKP0XXPsc5wZ0Ao/oDH6WJ/+lfPzOoG0Cfn1/tVPRufJr+BwJwU602zRI42jvwaWuEmviC9uU3z/6OX/GNY6DLHxZ+Bgc+4bh3V/Er3iXt9t/N8MGqsQtG9Qe+Xm2eHNDdJ87Q9Yxv6ILu+5+Vq50I78+cWcDzrL2aK2r7IOWEjw785lzCN0O01PavCrph4I0lXO367O2rfdqNX835wc9mlfhW+O40wUu69CVn6GzHq6QwFmBBYH/QF3YuaNKXmt3OqflUEA/86mkn64GX09q/aiOuBn344ME464GXs/bypm7ug4C9+OKQbruYrFxceuY+CA/85T7mRRf0DB+c6LqgXq3e3NqgT05wRdR0gRfA79hf7TAJroiJw4AP+jxbjtPaTx4GfGIUX+Rin+CKWBWviAF7Na9Bn5yhM3kYBOyVW7vaodI5jW6M4YHPcIu3TqN3YwwP/HWugz45wRUxuDFmv8XbZ+Vip3u1u90rPSX5Xu0wuctB7+Li4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vJn5b+wvnIJ12UunwAAAABJRU5ErkJggg=="
              alt=""
            />
            <img
              className="js"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
              alt=""
            />
            <img
              className="bs"
              src="https://i.pinimg.com/originals/c1/78/5d/c1785d50a929254419fa4aad0560b058.png"
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <p className="text mnd">Mars 2019</p>
          <div>
            <p className="text mb">
              Etter å ha lært JavaScript en stund så er det vanlig å bruke et
              rammeverk/bibliotek for dette prgrammeringsspråket. På denne tiden
              var det Vue, Angular og React som var ganske hot. Jeg begynner med
              både Vue og React men jeg bestemmer meg til slutt å gå for React.
              Der blir det også brukt Udemy som hovedkilde for læring.
            </p>

            <img
              className="react"
              src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
              alt=""
            />
            <img
              className="vue"
              src="https://positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png"
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <p className="text mnd">Januar 2020</p>
          <div>
            <p className="text mb">
              Jeg begynner å lære og bruke Next.js for publisering. Next.js er
              et frontend rammeverk som Vercel (tidligere Zeit) som står bak.
              Det gjør det veldig enkelt å publisere nettsider med Vercel,
              Såkalt server side rendering. Her er det mye bra out of the box.
            </p>

            <p className="text mb">
              {" "}
              På samme tid så tar jeg kurs i Node.js for backend. Dette for å
              kunne lage apper som bruker database. Iden forbindelse blir det
              også et kurs i Mongo DB.
            </p>
            <img
              className="img css"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png"
              alt=""
            />
            <img
              className="node"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/1200px-Node.js_logo_2015.svg.png"
              alt=""
            />
            <img
              className="mongo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <p className="text mnd">Mars 2020</p>
          <div>
            <p className="text mb">
              Jeg fortsetter å ta diverse kurs på Udemy for å utdype spesielt
              React mer. Jeg lærer meg mer om styling og CSS rammeverk som
              Styled Components og Material-UI og litt om Npm, git og Github.
              Github har jeg brukt siden 2018. Jeg starter kurs i Flutter og
              Electron for å prøve meg litt på det. Begynner litt med TypeScript
              også. Bortsett fra alle kurs som er nevnt ovenfor så har blitt
              sett mye youtube videoer og artikler på nettet for å finne ut av
              enkelte ting.
            </p>

            <img
              className="material"
              src="https://pro.guslyon.fr/static/material-ui-4a66e3fd52c7ec9469f4684b68aca251.png"
              alt=""
            />
            <img
              className="node"
              src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png"
              alt=""
            />
            <img
              className="mongo"
              src="https://i.pinimg.com/originals/c3/8e/e8/c38ee8475ee7f3680f706c56c3a1194c.png"
              alt=""
            />
          </div>
        </div>
      </ContentLayout>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 25rem 1fr;
            margin-top: 5rem;
          }
          .header {
            border-bottom: 1px solid #ddd;
            padding-bottom: 3rem;
          }
          .mnd {
            font-weight: bold;
          }
          .img {
            width: 7rem;
          }
          .css {
            width: 7rem;
          }
          .js {
            width: 3rem;
            margin-left: 2rem;
            margin-bottom: 1rem;
          }
          .bs {
            width: 3.5rem;
            margin-left: 2rem;
            margin-bottom: 1rem;
          }
          .node {
            width: 10rem;
            margin: 0 0 1.3rem 2.5rem;
          }
          .mongo {
            width: 8rem;
            margin: 0 0 1rem 1.5rem;
          }
          .react {
            width: 8rem;
            margin-bottom: 0.5rem;
          }
          .vue {
            width: 7rem;
            margin: 2rem 0 0 1.5rem;
          }
          .material {
            width: 10rem;
          }
          @media screen and (max-width: 1000px) {
            .container {
              grid-template-columns: 1fr;
            }
            .mnd {
              margin-bottom: 2rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default CvComponent;
