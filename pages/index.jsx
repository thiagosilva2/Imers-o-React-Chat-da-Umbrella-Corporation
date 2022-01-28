import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import appConfig from '../config.json';

    function GlobalStyle() {
      return (
         <style global jsx>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
          }
          body {
            font-family: 'Open Sans', sans-serif;
          }
          /* App fit Height */ 
          html, body, #__next {
            height: 100vh;
            width: 100vw;
            display: flex;
            flex: 1;
            margin: 0 auto;
          }
          #__next {
            flex: 1;
          }
          #__next > * {
            flex: 1;
          }
          /* ./App fit Height */ 
        `}</style>
     
      
        )
    }

function Titulo(props) {
  console.log(props)
  const Tag = props.tag || 'h1';
  return (
    <>
    <Tag>{props.children}</Tag> 
      <style jsx>{`
            ${Tag} {
               color: ${appConfig.theme.colors.neutrals["000"]}; 
              font-size: 24px;
              font-weight: 600;
            }
          `}</style>
    </>
  );
}
// Componente React
// function HomePage() {
//   return (  
//   <div>  
//       {/* <GlobalStyle/> */}
//       <Titulo tag='h2'>Bem vindos Shelbys</Titulo>
//       <h2>Discord dos Peaky Blinders</h2>
//   </div>
// )
// }
// export default HomePage

export default function PaginaInicial() {
  const username = 'thiagosilva2';

  return (
    <>
      <GlobalStyle />
      <Box
        styleSheet={{
          display: 'flex',
           alignItems: 'center', 
           justifyContent: 'center',
          backgroundImage: 'url(https://images.pling.com/img/00/00/10/91/44/1041531/90909-1.jpg)',
          backgroundRepeat: 'no-repeat', 
          backgroundSize: 'cover', 
          backgroundBlendMode: 'multiply',
          paddingRight:'500px' ,
          
        }}
        
      > 
     
     
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '600px', 
            borderRadius: '35px', padding: '32px', margin: '20px', marginTop: '200px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 15%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2"> Umbrella Corporation</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

            <TextField
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[950],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals[950],
                mainColor: appConfig.theme.colors.primary[950],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}