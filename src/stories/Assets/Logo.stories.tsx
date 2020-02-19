import React, { FunctionComponent } from 'react';

export default {
    title: 'Assets/Logo',
};

type LogoProp = {
    textColor?: string
}

export const Logo: FunctionComponent<LogoProp> = ({ textColor = "light-red" }) => {

    return (
        <svg fill="currentColor" className={textColor} width="252.251" height="36.55" viewBox="0 0 252.251 36.55" xmlns="http://www.w3.org/2000/svg">
            <path d="M 4.85 1.7 L 30.6 1.7 L 28.5 9.6 L 14.05 9.6 L 13.3 14.6 L 27.2 14.6 L 26.15 22.25 L 12.25 22.25 L 11.45 27.8 L 25.75 27.8 L 25.75 36 L 0 36 L 4.85 1.7 Z M 251.9 18.1 L 243.7 18.1 L 243.7 17.85 A 1.967 1.967 0 0 0 243.603 17.212 Q 243.396 16.606 242.75 16.3 A 4.514 4.514 0 0 0 241.606 15.942 Q 241.089 15.85 240.5 15.85 A 14.528 14.528 0 0 0 239.275 15.897 Q 236.6 16.125 236.6 17.45 A 0.972 0.972 0 0 0 237.051 18.28 Q 237.224 18.401 237.461 18.494 A 2.983 2.983 0 0 0 237.7 18.575 A 9.797 9.797 0 0 0 238.331 18.736 Q 239.058 18.898 240.122 19.054 A 51.532 51.532 0 0 0 241.2 19.2 Q 243.495 19.43 245.234 19.791 A 22.734 22.734 0 0 1 246.25 20.025 Q 248.3 20.55 249.8 21.975 A 4.607 4.607 0 0 1 251.071 24.167 Q 251.271 24.909 251.296 25.794 A 9.052 9.052 0 0 1 251.3 26.05 Q 251.3 30.75 247.95 33.625 A 10.191 10.191 0 0 1 244.761 35.432 Q 241.827 36.5 237.5 36.5 L 237 36.5 Q 231.5 36.5 228.525 34.825 A 6.001 6.001 0 0 1 226.655 33.238 Q 225.749 32.044 225.586 30.395 A 7.579 7.579 0 0 1 225.55 29.65 Q 225.55 28.45 225.75 27.65 L 233.85 27.65 A 0.127 0.127 0 0 0 233.824 27.691 Q 233.806 27.732 233.802 27.797 A 0.742 0.742 0 0 0 233.8 27.85 L 233.8 28.2 Q 233.8 29.4 235.025 29.925 A 6.507 6.507 0 0 0 236.928 30.408 A 7.96 7.96 0 0 0 237.75 30.45 Q 239.3 30.45 240.775 30.125 Q 241.476 29.971 241.844 29.653 A 1.139 1.139 0 0 0 242.25 28.75 Q 242.25 27.9 241.15 27.55 Q 240.321 27.286 238.696 26.994 A 60.418 60.418 0 0 0 237.55 26.8 Q 235.306 26.496 233.611 26.105 A 25.165 25.165 0 0 1 232.6 25.85 Q 230.6 25.3 229.15 23.875 Q 227.733 22.482 227.701 20.014 A 8.835 8.835 0 0 1 227.7 19.9 A 9.246 9.246 0 0 1 228.104 17.112 A 7.638 7.638 0 0 1 229.7 14.3 A 11.461 11.461 0 0 1 233.996 11.3 A 13.839 13.839 0 0 1 234.8 11 Q 237.9 9.95 241.15 9.95 L 241.55 9.95 A 19.945 19.945 0 0 1 245.131 10.256 A 14.496 14.496 0 0 1 249.075 11.55 Q 252.25 13.15 252.25 16.15 Q 252.25 16.708 252.175 17.126 A 2.884 2.884 0 0 1 252.075 17.525 A 32.441 32.441 0 0 0 252.034 17.649 Q 251.902 18.051 251.9 18.099 A 0.034 0.034 0 0 0 251.9 18.1 Z M 101.35 20.8 L 92.95 20.8 A 5.235 5.235 0 0 1 92.961 20.479 Q 92.978 20.194 93.025 19.85 A 14.692 14.692 0 0 0 93.058 19.594 Q 93.086 19.354 93.095 19.191 A 2.513 2.513 0 0 0 93.1 19.05 Q 93.1 17.75 92.275 16.875 Q 91.45 16 90.15 16 A 4.809 4.809 0 0 0 88.97 16.137 A 3.411 3.411 0 0 0 87.425 16.975 A 3.973 3.973 0 0 0 86.278 19.053 A 5.139 5.139 0 0 0 86.2 19.5 Q 85.75 21.95 85.425 24.375 Q 85.11 26.726 85.1 27.409 A 2.933 2.933 0 0 0 85.1 27.45 Q 85.1 28.8 85.975 29.625 A 2.853 2.853 0 0 0 87.149 30.281 Q 87.581 30.408 88.097 30.439 A 5.749 5.749 0 0 0 88.45 30.45 A 5.519 5.519 0 0 0 89.603 30.337 Q 90.686 30.105 91.375 29.4 Q 92.4 28.35 92.6 26.95 L 92.8 25.65 L 100.7 25.65 Q 99.9 30.8 96.325 33.65 A 12.798 12.798 0 0 1 90.728 36.178 A 17.957 17.957 0 0 1 87.25 36.5 A 19.565 19.565 0 0 1 84.249 36.283 Q 82.62 36.029 81.265 35.482 A 10.844 10.844 0 0 1 80.375 35.075 A 11.197 11.197 0 0 1 78.015 33.478 A 9.009 9.009 0 0 1 76.225 31.3 Q 74.85 28.95 74.85 26.1 Q 74.85 21.6 76.65 17.925 Q 78.45 14.25 81.95 12.1 A 14.29 14.29 0 0 1 87.009 10.228 A 19.292 19.292 0 0 1 90.35 9.95 A 22.272 22.272 0 0 1 93.361 10.138 Q 97.241 10.67 99.05 12.7 Q 101.5 15.45 101.5 19 Q 101.5 19.9 101.35 20.8 Z M 72.75 19.5 L 72.65 20.85 A 11.461 11.461 0 0 1 72.619 21.209 Q 72.532 22.078 72.25 24.18 A 321.83 321.83 0 0 1 72.2 24.55 L 55.55 24.55 L 55.35 25.8 Q 55.105 27.32 55.148 27.494 A 0.085 0.085 0 0 0 55.15 27.5 A 3.309 3.309 0 0 0 55.273 28.426 A 2.464 2.464 0 0 0 56.1 29.675 A 3.353 3.353 0 0 0 57.543 30.35 A 4.812 4.812 0 0 0 58.55 30.45 Q 60.3 30.45 61.4 29.375 Q 62.486 28.313 62.744 26.447 A 7.675 7.675 0 0 0 62.75 26.4 L 71.9 26.4 Q 71.5 29.25 69.675 31.55 A 11.836 11.836 0 0 1 66.262 34.452 A 14.699 14.699 0 0 1 64.825 35.175 A 15.705 15.705 0 0 1 60.41 36.357 A 19.798 19.798 0 0 1 58 36.5 L 57.25 36.5 A 17.74 17.74 0 0 1 53.744 36.168 A 14.038 14.038 0 0 1 50.825 35.25 A 10.586 10.586 0 0 1 47.927 33.384 A 9.495 9.495 0 0 1 46.425 31.625 Q 44.85 29.25 44.85 26 A 20.337 20.337 0 0 1 45.28 21.718 A 15.376 15.376 0 0 1 46.875 17.425 Q 48.9 13.8 52.475 11.875 A 16.106 16.106 0 0 1 58.279 10.086 A 20.202 20.202 0 0 1 60.65 9.95 L 61.9 9.95 A 16.993 16.993 0 0 1 65.012 10.217 Q 66.766 10.544 68.143 11.273 A 8.455 8.455 0 0 1 69.95 12.55 A 8.619 8.619 0 0 1 72.652 17.93 A 12.124 12.124 0 0 1 72.75 19.5 Z M 119.55 2.3 L 117.85 10.45 L 123.85 10.45 L 122.85 17.55 L 116.85 17.55 A 1861.745 1861.745 0 0 0 116.51 19.856 Q 115.52 26.606 115.413 27.754 A 2.456 2.456 0 0 0 115.4 27.95 Q 115.4 29.45 116.025 29.95 Q 116.476 30.311 117.253 30.411 A 5.06 5.06 0 0 0 117.9 30.45 Q 118.473 30.45 119.387 30.291 A 18.003 18.003 0 0 0 119.475 30.275 Q 120.15 30.154 120.645 29.997 A 4.931 4.931 0 0 0 121.05 29.85 L 120.25 35.45 Q 119.05 35.9 116.925 36.225 Q 114.8 36.55 113.4 36.55 Q 110.878 36.55 109.102 36.033 A 7.499 7.499 0 0 1 107.275 35.25 A 4.262 4.262 0 0 1 105.291 32.356 A 7.062 7.062 0 0 1 105.15 30.9 A 9.398 9.398 0 0 1 105.162 30.449 Q 105.184 29.982 105.25 29.375 A 23.44 23.44 0 0 1 105.316 28.836 Q 105.425 28.01 105.646 26.632 A 177.592 177.592 0 0 1 105.7 26.3 L 106.95 17.55 L 104.15 17.55 L 105.15 10.45 L 107.95 10.45 L 109.1 2.3 L 119.55 2.3 Z M 198.9 13.5 L 199.15 13.5 L 200.85 10.45 L 208.3 10.45 Q 207.25 16.8 206.45 22.375 Q 205.701 27.591 205.653 28.977 A 5.01 5.01 0 0 0 205.65 29.15 Q 205.65 30.5 206.95 30.5 A 2.618 2.618 0 0 0 207.751 30.367 Q 208.081 30.261 208.429 30.071 A 5.483 5.483 0 0 0 208.8 29.85 L 208.05 35.35 Q 207.016 35.891 205.619 36.191 A 13.146 13.146 0 0 1 205.575 36.2 Q 204.15 36.5 202.9 36.5 Q 200.795 36.5 199.252 36.014 A 7.494 7.494 0 0 1 198.425 35.7 Q 196.65 34.9 196.1 32.6 A 10.824 10.824 0 0 1 192.913 35.296 A 12.39 12.39 0 0 1 192.725 35.4 A 9.265 9.265 0 0 1 190.503 36.274 A 7.775 7.775 0 0 1 188.65 36.5 A 10.896 10.896 0 0 1 186.134 36.228 Q 184.355 35.806 183.12 34.728 A 6.488 6.488 0 0 1 182.175 33.7 Q 180.286 31.151 180.117 27.152 A 18.952 18.952 0 0 1 180.1 26.35 A 23.837 23.837 0 0 1 181.375 18.675 A 15.307 15.307 0 0 1 183.535 14.464 A 13.806 13.806 0 0 1 185.375 12.425 A 9.466 9.466 0 0 1 191.346 9.973 A 12.366 12.366 0 0 1 192.1 9.95 Q 194.15 9.95 196 10.875 Q 197.85 11.8 198.9 13.5 Z M 178.6 20.8 L 170.5 20.8 Q 170.5 20.3 170.575 19.9 A 5.045 5.045 0 0 0 170.624 19.592 Q 170.642 19.445 170.647 19.315 A 2.631 2.631 0 0 0 170.65 19.2 A 3.682 3.682 0 0 0 170.575 18.42 Q 170.288 17.1 168.9 17.1 A 2.345 2.345 0 0 0 167.942 17.292 A 2.262 2.262 0 0 0 167.225 17.8 A 2.959 2.959 0 0 0 166.503 19.091 A 3.879 3.879 0 0 0 166.4 19.6 L 164.1 36 L 154.45 36 L 158.05 10.45 L 165.45 10.45 L 166 14.15 A 2.905 2.905 0 0 1 166.211 13.826 Q 166.454 13.496 166.873 13.056 A 17.889 17.889 0 0 1 167.325 12.6 Q 168.334 11.615 169.877 10.8 A 15.348 15.348 0 0 1 169.925 10.775 Q 171.5 9.95 173.35 9.95 A 9.463 9.463 0 0 1 175.099 10.101 Q 176.085 10.287 176.859 10.7 A 4.759 4.759 0 0 1 177.875 11.425 A 4.844 4.844 0 0 1 179.311 14.055 A 7.144 7.144 0 0 1 179.45 15.5 Q 179.45 16.4 178.85 19.4 Q 178.816 19.77 178.715 20.274 A 16.306 16.306 0 0 1 178.6 20.8 Z M 34.65 0 L 44.55 0 L 39.5 36 L 29.65 36 L 34.65 0 Z M 216.1 0 L 226 0 L 220.95 36 L 211.1 36 L 216.1 0 Z M 137.4 36.5 L 136.65 36.5 A 19.764 19.764 0 0 1 133.091 36.2 Q 129.617 35.563 127.425 33.575 A 9.671 9.671 0 0 1 124.283 27.269 A 13.562 13.562 0 0 1 124.2 25.75 Q 124.2 21.8 125.9 18.175 Q 127.6 14.55 131.075 12.25 A 13.583 13.583 0 0 1 136.153 10.247 A 18.596 18.596 0 0 1 139.55 9.95 L 140.4 9.95 A 19.112 19.112 0 0 1 143.984 10.265 Q 146.037 10.657 147.643 11.538 A 9.819 9.819 0 0 1 149.525 12.875 A 9.649 9.649 0 0 1 152.637 18.965 A 13.605 13.605 0 0 1 152.75 20.75 A 17.854 17.854 0 0 1 152.063 25.776 A 15.633 15.633 0 0 1 150.8 28.85 Q 148.85 32.45 145.35 34.475 Q 141.85 36.5 137.4 36.5 Z M 141.4 26.95 L 141.95 23.3 L 142.5 19.05 Q 142.5 17.85 141.675 16.925 A 2.721 2.721 0 0 0 139.749 16.008 A 3.736 3.736 0 0 0 139.5 16 Q 138 16 136.9 17 Q 135.8 18 135.55 19.5 Q 135.163 21.863 134.887 23.765 A 160.257 160.257 0 0 0 134.8 24.375 Q 134.5 26.5 134.45 27.45 A 3.256 3.256 0 0 0 134.624 28.534 A 2.806 2.806 0 0 0 135.3 29.6 A 2.871 2.871 0 0 0 137.247 30.445 A 3.82 3.82 0 0 0 137.45 30.45 A 3.974 3.974 0 0 0 138.917 30.186 A 3.655 3.655 0 0 0 140.075 29.45 Q 141.15 28.45 141.4 26.95 Z M 196.15 26.95 L 196.65 23.35 L 196.85 21.75 A 110.901 110.901 0 0 0 196.969 20.987 Q 197.174 19.634 197.197 19.195 A 1.867 1.867 0 0 0 197.2 19.1 A 4.328 4.328 0 0 0 197.123 18.256 Q 197.026 17.768 196.806 17.39 A 2.265 2.265 0 0 0 196.475 16.95 A 2.417 2.417 0 0 0 195.052 16.236 A 3.392 3.392 0 0 0 194.55 16.2 Q 193.2 16.2 192.175 17.2 A 4.139 4.139 0 0 0 190.96 19.63 A 5.136 5.136 0 0 0 190.95 19.7 A 1654.41 1654.41 0 0 0 190.704 21.441 Q 189.987 26.532 189.909 27.361 A 1.78 1.78 0 0 0 189.9 27.5 A 3.682 3.682 0 0 0 190.021 28.469 A 2.775 2.775 0 0 0 190.65 29.625 A 2.439 2.439 0 0 0 192.425 30.448 A 3.117 3.117 0 0 0 192.55 30.45 A 3.972 3.972 0 0 0 193.611 30.316 A 2.905 2.905 0 0 0 195 29.475 A 4.341 4.341 0 0 0 195.912 27.916 A 5.847 5.847 0 0 0 196.15 26.95 Z M 56.25 19.5 L 56.15 20.2 L 63.05 20.2 A 1.334 1.334 0 0 1 63.054 20.104 Q 63.064 19.966 63.1 19.75 A 3.407 3.407 0 0 0 63.134 19.468 Q 63.146 19.323 63.149 19.161 A 6.069 6.069 0 0 0 63.15 19.05 Q 63.15 17.75 62.325 16.875 Q 61.5 16 60.2 16 Q 58.7 16 57.575 17.025 Q 56.45 18.05 56.25 19.5 Z" />
        </svg>);
};
