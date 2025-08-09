/**
 * Konfigurasi sederhana untuk Music Player
 * Lebih direct dan mudah dipahami
 */

// API URLs - Basic configuration
const API_URL = {
    SEARCH: 'https://api.siputzx.my.id/api/s/youtube',
    DOWNLOAD_MP3: 'https://api.siputzx.my.id/api/d/ytmp3'
};

// App defaults
const APP_DEFAULTS = {
    DEFAULT_SEARCH: 'popular songs 2025',
    MAX_RECENT_ITEMS: 10,
    MAX_QUEUE_ITEMS: 5,
    STORAGE_KEY: 'recentlyPlayed'
};

// Utility functions
const UTILS = {
    // Format seconds to MM:SS
    formatTime: function(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    },
    
    // Check if text needs scrolling
    needsScrolling: function(text, maxLength = 20) {
        return text && text.length > maxLength;
    },
    
    // Format song object from API response
    formatSong: function(item) {
    return {
        id: item.link || '', // bisa pakai link sebagai ID unik
        title: item.title || 'Unknown Title',
        artist: item.channel || 'Unknown Artist',
        thumbnail: item.imageUrl || '/api/placeholder/300/300',
        duration: item.duration || '0:00', // tetap string seperti API kasih
        timestamp: item.duration || '0:00', // kalau mau sama saja
        videoUrl: item.link || ''
    };
},
    
    // Format search results
    formatSearchResults: function(items) {
        if (!Array.isArray(items)) return [];
        return items.map(item => this.formatSong(item));
    },
    
    // Get download URL from API response
    getDownloadUrl: function(data) {
        return data && data.dl ? data.dl : null;
    }
};