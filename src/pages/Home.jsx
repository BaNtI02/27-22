import { Box, Container, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useRef } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AirIcon from '@mui/icons-material/Air';
import { motion } from 'framer-motion';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  background: `linear-gradient(45deg, ${theme.palette.primary.light} 30%, ${theme.palette.secondary.light} 90%)`,
  padding: theme.spacing(4),
}));

const TextSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.light} 100%)`,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: '"Dancing Script", cursive',
  color: theme.palette.primary.main,
  textAlign: 'center',
  lineHeight: 1.8,
  marginBottom: theme.spacing(4),
}));

const MusicButton = styled(motion(IconButton))(({ theme }) => ({
  backgroundColor: 'white',
  color: theme.palette.primary.main,
  width: '50px',
  height: '50px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: 'white',
    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '1.8rem',
  },
}));

const FloatingHeart = styled(motion(FavoriteIcon))(({ theme }) => ({
  position: 'absolute',
  color: theme.palette.primary.main,
  fontSize: '1.5rem',
  opacity: 0.6,
  pointerEvents: 'none',
}));

const ImageSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
  position: 'relative',
  overflow: 'hidden',
  minHeight: '200px',
}));

const FloatingImage = styled(motion.img)(({ theme }) => ({
  width: '280px',
  height: '380px',
  objectFit: 'cover',
  borderRadius: '20px',
  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  position: 'absolute',
}));

const FloatingBalloon = styled(motion(AirIcon))(({ theme }) => ({
  position: 'absolute',
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: '2.5rem',
  pointerEvents: 'none',
}));

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('/src/assets/music/mkb.mp3'));

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <HeroSection>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', md: '5rem' },
                fontWeight: 700,
                mb: 2,
                fontFamily: 'Monoton, cursive',
              }}
            >
              Mummu ka Budhuu
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2.5rem' },
                mb: 4,
                fontFamily: 'Dancing Script, cursive',
              }}
            >
              कहाँ से Dosthi कहानी शुरू
            </Typography>
            <MusicButton
              onClick={togglePlay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </MusicButton>
          </Box>
        </Container>
      </HeroSection>

      <TextSection>
        <Container maxWidth="md" sx={{ position: 'relative' }}>
          <FloatingHeart
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [-15, 15, -15],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: '5%',
              top: '10%'
            }}
          />
          <FloatingHeart
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [15, -15, 15],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            style={{
              right: '5%',
              top: '20%'
            }}
          />
          <FloatingHeart
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            style={{
              left: '15%',
              bottom: '15%'
            }}
          />
          <FloatingHeart
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [-12, 12, -12],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
            style={{
              right: '20%',
              top: '40%'
            }}
          />
          <FloatingHeart
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [12, -12, 12],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7
            }}
            style={{
              left: '25%',
              top: '60%'
            }}
          />
          <FloatingHeart
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [-8, 8, -8],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
            style={{
              right: '30%',
              bottom: '30%'
            }}
          />
          <FloatingHeart
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [8, -8, 8],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4
            }}
            style={{
              left: '35%',
              top: '80%'
            }}
          />
          <FloatingHeart
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6
            }}
            style={{
              right: '25%',
              bottom: '45%'
            }}
          />
          <StyledTypography variant="h3" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 6 }}>
            24 November 2024
          </StyledTypography>
          
          <StyledTypography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, mb: 4 }}>
            You are not just my Best Friend.
          </StyledTypography>
          
          <StyledTypography variant="body1" sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
            • You're my crazy best half. <br />
            • My secret supporter. <br />
            • My daily chart buster in each sec's. <br />
            • My personal adviser. <br />
            • My Everything has a mirror to me.
          </StyledTypography>

          <StyledTypography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, mt: 8, mb: 4 }}>
            In short and sweet 💕 U r "mine" everything. <br />
            I love Best Friend U
          </StyledTypography>

          <StyledTypography variant="h3" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 6 }}>
            Mumuu ka Budhuu
          </StyledTypography>
        </Container>
      </TextSection>

      <ImageSection>
        <Container maxWidth="lg" sx={{ position: 'relative', height: '400px' }}>
          {/* Background Balloons */}
          <FloatingBalloon
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [-25, 25, -25],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: '5%',
              top: '5%'
            }}
          />
          <FloatingBalloon
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [25, -25, 25],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            style={{
              right: '8%',
              top: '8%'
            }}
          />
          <FloatingBalloon
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [-20, 20, -20],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            style={{
              left: '15%',
              bottom: '10%'
            }}
          />
          <FloatingBalloon
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [20, -20, 20],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7
            }}
            style={{
              right: '12%',
              bottom: '15%'
            }}
          />
          <FloatingBalloon
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [-15, 15, -15],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4.1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
            style={{
              left: '8%',
              top: '40%'
            }}
          />
          <FloatingBalloon
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [15, -15, 15],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6
            }}
            style={{
              right: '5%',
              top: '60%'
            }}
          />

          {/* Images */}
          <Box sx={{ 
            position: 'relative', 
            height: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            gap: '2rem'
          }}>
            <FloatingImage
              src="/src/assets/images/image1.JPG"
              initial={{ y: 0, opacity: 0 }}
              animate={{ 
                y: [-15, 15, -15],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: 'relative',
                left: 'auto',
                top: 'auto',
                transform: 'none'
              }}
            />
            <FloatingImage
              src="/src/assets/images/image2.JPG"
              initial={{ y: 0, opacity: 0 }}
              animate={{ 
                y: [15, -15, 15],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              style={{
                position: 'relative',
                left: 'auto',
                top: 'auto',
                transform: 'none'
              }}
            />
            <FloatingImage
              src="/src/assets/images/image3.JPG"
              initial={{ y: 0, opacity: 0 }}
              animate={{ 
                y: [-12, 12, -12],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 5.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              style={{
                position: 'relative',
                left: 'auto',
                top: 'auto',
                transform: 'none'
              }}
            />
          </Box>
        </Container>
      </ImageSection>
    </>
  );
};

export default Home; 