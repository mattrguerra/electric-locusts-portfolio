'use client';

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  loop?: boolean;
  className?: string;
}

export default function VideoPlayer({ src, poster, loop = false, className = '' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);

  useEffect(() => {
    // Attempt to autoplay when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, user interaction required
        setIsPlaying(false);
      });
    }
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        setHasEnded(false);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleEnded = () => {
    if (!loop) {
      setIsPlaying(false);
      setHasEnded(true);
    }
  };

  return (
    <div
      className={`relative group cursor-pointer ${className}`}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop={loop}
        playsInline
        className="w-full h-auto"
        onEnded={handleEnded}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Play/Pause overlay - shows when paused or ended */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity">
          <div className="w-20 h-20 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm">
            <Play className="w-10 h-10 text-white/90 ml-1" />
          </div>
        </div>
      )}

      {/* Sound toggle button - always visible but subtle */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 p-3 rounded-full bg-black/20 text-white/40 hover:bg-black/40 hover:text-white transition-all backdrop-blur-sm"
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </button>

      {/* Video progress indicator for non-looping videos */}
      {!loop && hasEnded && (
        <div className="absolute top-4 left-4 text-white/60 text-xs bg-black/40 px-3 py-1 rounded backdrop-blur-sm">
          Click to replay
        </div>
      )}
    </div>
  );
}
