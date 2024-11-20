import React, { useState, useRef, useEffect } from 'react';
import { Howl } from 'howler';

const AudioPlayer = ({ audioUrl, duration }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const soundRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const animationRef = useRef();

  useEffect(() => {
    try {
      if (soundRef.current) {
        soundRef.current.unload();
      }

      soundRef.current = new Howl({
        src: [audioUrl],
        format: ['mp3', 'wav'],
        html5: true,
        preload: true,
        pool: 1,
        onload: () => {
          setIsLoaded(true);
          setError(null);
        },
        onloaderror: (id, error) => {
          console.error('Audio load error:', error);
          setError('Failed to load audio. Please try again.');
          setIsLoaded(false);
        },
        onplay: () => {
          setIsPlaying(true);
          animationRef.current = requestAnimationFrame(updateProgress);
        },
        onpause: () => {
          setIsPlaying(false);
          cancelAnimationFrame(animationRef.current);
        },
        onstop: () => {
          setIsPlaying(false);
          setCurrentTime(0);
          cancelAnimationFrame(animationRef.current);
        },
        onend: () => {
          setIsPlaying(false);
          setCurrentTime(0);
          cancelAnimationFrame(animationRef.current);
        },
        onseek: () => {
          setCurrentTime(soundRef.current.seek());
        }
      });

      return () => {
        if (soundRef.current) {
          soundRef.current.unload();
        }
        cancelAnimationFrame(animationRef.current);
      };
    } catch (err) {
      console.error('Audio initialization error:', err);
      setError('Audio initialization failed');
    }
  }, [audioUrl]);

  const updateProgress = () => {
    if (soundRef.current) {
      const time = soundRef.current.seek();
      setCurrentTime(time);
      animationRef.current = requestAnimationFrame(updateProgress);
    }
  };

  const handleProgressClick = (e) => {
    if (!soundRef.current || !isLoaded) return;

    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const width = bounds.width;
    const percentage = x / width;
    const seekTime = percentage * duration;

    soundRef.current.seek(seekTime);
    setCurrentTime(seekTime);
  };

  const togglePlay = () => {
    if (!isLoaded || !soundRef.current) return;
    
    try {
      if (isPlaying) {
        soundRef.current.pause();
      } else {
        soundRef.current.play();
      }
    } catch (err) {
      console.error('Playback error:', err);
      setError('Playback failed');
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-lg">
        <p className="text-red-600">{error}</p>
        <button 
          onClick={() => window.location.href = audioUrl}
          className="mt-2 text-sm text-red-700 hover:text-red-800 underline"
        >
          Download audio directly
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-4 flex items-center space-x-4 mb-8 shadow-md">
      <button 
        className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#64007B] hover:bg-[#C80D83] transition-colors"
        onClick={togglePlay}
        disabled={!isLoaded}
      >
        {isPlaying ? (
          <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        )}
      </button>
      <span className="text-[14px] text-[#2D2D2D] min-w-[50px]">{formatTime(currentTime)}</span>
      <div 
        className="flex-grow h-2 bg-gray-200 rounded-full relative cursor-pointer"
        onClick={handleProgressClick}
      >
        <div 
          className="absolute top-0 left-0 h-full bg-[#64007B] rounded-full transition-all duration-100" 
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
      </div>
      <span className="text-[14px] text-[#2D2D2D] min-w-[50px]">{formatTime(duration)}</span>
    </div>
  );
};

export default AudioPlayer;