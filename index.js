// Код для подсветки активной кнопки
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        const buttonPage = button.getAttribute('href');
        if (buttonPage === currentPage) {
            button.classList.add('active');
        }
    });
});

let currentSlide = 0;
let currentSecondSlide = 0;
let currentThirdSlide = 0;
let currentFourthSlide = 0;
let currentFifthSlide = 0;
let currentSixthSlide = 0;
let currentSeventhSlide = 0;
let currentEighthSlide = 0;
let currentNinthSlide = 0;

// Элементы первого блока
const slides = document.querySelectorAll('.slide:not(.second):not(.third):not(.fourth):not(.fifth)');
const textSlides = document.querySelectorAll('.text-slide:not(.second):not(.third):not(.fourth):not(.fifth)');
const totalSlides = slides.length;

// Элементы первого скроллбара
const scrollbarThumb = document.querySelector('.scrollbar-thumb:not(.second-scrollbar-thumb):not(.third-scrollbar-thumb):not(.fourth-scrollbar-thumb):not(.fifth-scrollbar-thumb)');
const scrollbarTrack = document.querySelector('.scrollbar-track:not(.second-scrollbar-track):not(.third-scrollbar-track):not(.fourth-scrollbar-track):not(.fifth-scrollbar-track)');
const textContainer = document.querySelector('.text-container:not(.second-text-container):not(.third-text-container):not(.fourth-text-container):not(.fifth-text-container)');

// Элементы второго блока
const secondSlides = document.querySelectorAll('.slide.second');
const secondTextSlides = document.querySelectorAll('.text-slide.second');
const totalSecondSlides = secondSlides.length;

// Элементы второго скроллбара
const secondScrollbarThumb = document.querySelector('.second-scrollbar-thumb');
const secondScrollbarTrack = document.querySelector('.second-scrollbar-track');
const secondTextContainer = document.querySelector('.second-text-container');

// Элементы третьего блока
const thirdSlides = document.querySelectorAll('.slide.third');
const thirdTextSlides = document.querySelectorAll('.text-slide.third');
const totalThirdSlides = thirdSlides.length;

// Элементы третьего скроллбара
const thirdScrollbarThumb = document.querySelector('.third-scrollbar-thumb');
const thirdScrollbarTrack = document.querySelector('.third-scrollbar-track');
const thirdTextContainer = document.querySelector('.third-text-container');

// Элементы четвёртого блока
const fourthSlides = document.querySelectorAll('.slide.fourth');
const fourthTextSlides = document.querySelectorAll('.text-slide.fourth');
const totalFourthSlides = fourthSlides.length;

// Элементы четвёртого скроллбара
const fourthScrollbarThumb = document.querySelector('.fourth-scrollbar-thumb');
const fourthScrollbarTrack = document.querySelector('.fourth-scrollbar-track');
const fourthTextContainer = document.querySelector('.fourth-text-container');

// Элементы пятого блока
const fifthSlides = document.querySelectorAll('.slide.fifth');
const fifthTextSlides = document.querySelectorAll('.text-slide.fifth');
const totalFifthSlides = fifthSlides.length;

// Элементы пятого скроллбара
const fifthScrollbarThumb = document.querySelector('.fifth-scrollbar-thumb');
const fifthScrollbarTrack = document.querySelector('.fifth-scrollbar-track');
const fifthTextContainer = document.querySelector('.fifth-text-container');

// Элементы шестого блока
const sixthSlides = document.querySelectorAll('.slide.sixth');
const sixthTextSlides = document.querySelectorAll('.text-slide.sixth');
const totalSixthSlides = sixthSlides.length;

// Элементы шестого скроллбара
const sixthScrollbarThumb = document.querySelector('.sixth-scrollbar-thumb');
const sixthScrollbarTrack = document.querySelector('.sixth-scrollbar-track');
const sixthTextContainer = document.querySelector('.sixth-text-container');

// Элементы седьмого блока
const seventhSlides = document.querySelectorAll('.slide.seventh');
const seventhTextSlides = document.querySelectorAll('.text-slide.seventh');
const totalSeventhSlides = seventhSlides.length;

// Элементы седьмого скроллбара
const seventhScrollbarThumb = document.querySelector('.seventh-scrollbar-thumb');
const seventhScrollbarTrack = document.querySelector('.seventh-scrollbar-track');
const seventhTextContainer = document.querySelector('.seventh-text-container');

// Элементы восьмого блока
const eighthSlides = document.querySelectorAll('.slide.eighth');
const eighthTextSlides = document.querySelectorAll('.text-slide.eighth');
const totalEighthSlides = eighthSlides.length;

// Элементы восьмого скроллбара
const eighthScrollbarThumb = document.querySelector('.eighth-scrollbar-thumb');
const eighthScrollbarTrack = document.querySelector('.eighth-scrollbar-track');
const eighthTextContainer = document.querySelector('.eighth-text-container');

// Элементы девятого блока
const ninthSlides = document.querySelectorAll('.slide.ninth');
const ninthTextSlides = document.querySelectorAll('.text-slide.ninth');
const totalNinthSlides = ninthSlides.length;

// Элементы девятого скроллбара
const ninthScrollbarThumb = document.querySelector('.ninth-scrollbar-thumb');
const ninthScrollbarTrack = document.querySelector('.ninth-scrollbar-track');
const ninthTextContainer = document.querySelector('.ninth-text-container');

// Переменные для всех блоков
let isDraggingScrollbar = false;
let isDraggingText = false;
let textDragStartY = 0;
let textScrollStartTop = 0;

let isDraggingSecondScrollbar = false;
let isDraggingSecondText = false;
let secondTextDragStartY = 0;
let secondTextScrollStartTop = 0;

let isDraggingThirdScrollbar = false;
let isDraggingThirdText = false;
let thirdTextDragStartY = 0;
let thirdTextScrollStartTop = 0;

let isDraggingFourthScrollbar = false;
let isDraggingFourthText = false;
let fourthTextDragStartY = 0;
let fourthTextScrollStartTop = 0;

let isDraggingFifthScrollbar = false;
let isDraggingFifthText = false;
let fifthTextDragStartY = 0;
let fifthTextScrollStartTop = 0;

let isDraggingSixthScrollbar = false;
let isDraggingSixthText = false;
let sixthTextDragStartY = 0;
let sixthTextScrollStartTop = 0;

let isDraggingSeventhScrollbar = false;
let isDraggingSeventhText = false;
let seventhTextDragStartY = 0;
let seventhTextScrollStartTop = 0;

let isDraggingEighthScrollbar = false;
let isDraggingEighthText = false;
let eighthTextDragStartY = 0;
let eighthTextScrollStartTop = 0;

let isDraggingNinthScrollbar = false;
let isDraggingNinthText = false;
let ninthTextDragStartY = 0;
let ninthTextScrollStartTop = 0;

// Инициализация
function init() {
    updateScrollbar();
    updateSecondScrollbar();
    updateThirdScrollbar();
    updateFourthScrollbar();
    updateFifthScrollbar();
    updateSixthScrollbar();
    updateSeventhScrollbar();
    updateEighthScrollbar();
    updateNinthScrollbar();
    setupEventListeners();
    setupSecondEventListeners();
    setupThirdEventListeners();
    setupFourthEventListeners();
    setupFifthEventListeners();
    setupSixthEventListeners();
    setupSeventhEventListeners();
    setupEighthEventListeners();
    setupNinthEventListeners();
}

// блок 1
function updateScrollbar() {
    const activeSlide = document.querySelector('.text-slide.active:not(.second):not(.third):not(.fourth):not(.fifth)');
    if (!activeSlide || !scrollbarTrack || !scrollbarThumb) return;
    
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    const scrollTop = activeSlide.scrollTop;
    const trackHeight = scrollbarTrack.clientHeight;
    
    if (scrollHeight <= clientHeight) {
        scrollbarThumb.style.display = 'none';
        return;
    }
    
    scrollbarThumb.style.display = 'block';
    const thumbHeight = Math.max(trackHeight * (clientHeight / scrollHeight), 20);
    scrollbarThumb.style.height = thumbHeight + 'px';
    const maxScroll = scrollHeight - clientHeight;
    const thumbTop = (scrollTop / maxScroll) * (trackHeight - thumbHeight);
    scrollbarThumb.style.top = thumbTop + 'px';
}

function setupEventListeners() {
    if (!scrollbarThumb || !scrollbarTrack || !textContainer) return;
    
    scrollbarThumb.addEventListener('mousedown', startScrollbarDrag);
    document.addEventListener('mouseup', stopScrollbarDrag);
    document.addEventListener('mousemove', handleScrollbarDrag);
    scrollbarTrack.addEventListener('click', handleTrackClick);
    textContainer.addEventListener('mousedown', startTextDrag);
    textContainer.addEventListener('wheel', handleWheel);
}

function startScrollbarDrag(e) {
    isDraggingScrollbar = true;
    scrollbarThumb.style.backgroundColor = '#95d32a';
    e.preventDefault();
}

function stopScrollbarDrag() {
    isDraggingScrollbar = false;
    scrollbarThumb.style.backgroundColor = '#B2F142';
}

function handleScrollbarDrag(e) {
    if (!isDraggingScrollbar) return;
    
    const activeSlide = document.querySelector('.text-slide.active:not(.second):not(.third):not(.fourth):not(.fifth)');
    const trackRect = scrollbarTrack.getBoundingClientRect();
    const thumbHeight = scrollbarThumb.offsetHeight;
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    
    let newTop = e.clientY - trackRect.top - (thumbHeight / 2);
    newTop = Math.max(0, Math.min(newTop, trackRect.height - thumbHeight));
    scrollbarThumb.style.top = newTop + 'px';
    
    const scrollRatio = newTop / (trackRect.height - thumbHeight);
    const maxScrollTop = scrollHeight - clientHeight;
    activeSlide.scrollTop = scrollRatio * maxScrollTop;
}

function handleTrackClick(e) {
    const activeSlide = document.querySelector('.text-slide.active:not(.second):not(.third):not(.fourth):not(.fifth)');
    const trackRect = scrollbarTrack.getBoundingClientRect();
    const thumbHeight = scrollbarThumb.offsetHeight;
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    
    const clickY = e.clientY - trackRect.top;
    const newTop = Math.max(0, Math.min(clickY - (thumbHeight / 2), trackRect.height - thumbHeight));
    scrollbarThumb.style.top = newTop + 'px';
    
    const scrollRatio = newTop / (trackRect.height - thumbHeight);
    const maxScrollTop = scrollHeight - clientHeight;
    activeSlide.scrollTop = scrollRatio * maxScrollTop;
}

function startTextDrag(e) {
    const activeSlide = document.querySelector('.text-slide.active:not(.second):not(.third):not(.fourth):not(.fifth)');
    if (!activeSlide) return;
    
    isDraggingText = true;
    textDragStartY = e.clientY;
    textScrollStartTop = activeSlide.scrollTop;
    textContainer.style.cursor = 'grabbing';
    e.preventDefault();
    document.addEventListener('mousemove', handleTextDrag);
    document.addEventListener('mouseup', stopTextDrag);
}

function handleTextDrag(e) {
    if (!isDraggingText) return;
    
    const activeSlide = document.querySelector('.text-slide.active:not(.second):not(.third):not(.fourth):not(.fifth)');
    if (!activeSlide) return;
    
    const deltaY = textDragStartY - e.clientY;
    activeSlide.scrollTop = textScrollStartTop + deltaY;
    updateScrollbar();
}

function stopTextDrag() {
    isDraggingText = false;
    textContainer.style.cursor = 'grab';
    document.removeEventListener('mousemove', handleTextDrag);
    document.removeEventListener('mouseup', stopTextDrag);
}

function handleWheel(e) {
    const activeSlide = document.querySelector('.text-slide.active:not(.second):not(.third):not(.fourth):not(.fifth)');
    if (!activeSlide) return;
    
    activeSlide.scrollTop += e.deltaY;
    e.preventDefault();
    updateScrollbar();
}

// блок 2
function updateSecondScrollbar() {
    const activeSlide = document.querySelector('.text-slide.second.active');
    if (!activeSlide || !secondScrollbarTrack || !secondScrollbarThumb) return;
    
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    const scrollTop = activeSlide.scrollTop;
    const trackHeight = secondScrollbarTrack.clientHeight;
    
    if (scrollHeight <= clientHeight) {
        secondScrollbarThumb.style.display = 'none';
        return;
    }
    
    secondScrollbarThumb.style.display = 'block';
    const thumbHeight = Math.max(trackHeight * (clientHeight / scrollHeight), 20);
    secondScrollbarThumb.style.height = thumbHeight + 'px';
    const maxScroll = scrollHeight - clientHeight;
    const thumbTop = (scrollTop / maxScroll) * (trackHeight - thumbHeight);
    secondScrollbarThumb.style.top = thumbTop + 'px';
}

function setupSecondEventListeners() {
    if (!secondScrollbarThumb || !secondScrollbarTrack || !secondTextContainer) return;
    
    secondScrollbarThumb.addEventListener('mousedown', startSecondScrollbarDrag);
    document.addEventListener('mouseup', stopSecondScrollbarDrag);
    document.addEventListener('mousemove', handleSecondScrollbarDrag);
    secondScrollbarTrack.addEventListener('click', handleSecondTrackClick);
    secondTextContainer.addEventListener('mousedown', startSecondTextDrag);
    secondTextContainer.addEventListener('wheel', handleSecondWheel);
}

function startSecondScrollbarDrag(e) {
    isDraggingSecondScrollbar = true;
    secondScrollbarThumb.style.backgroundColor = '#a07be0';
    e.preventDefault();
}

function stopSecondScrollbarDrag() {
    isDraggingSecondScrollbar = false;
    secondScrollbarThumb.style.backgroundColor = '#B287FD';
}

function handleSecondScrollbarDrag(e) {
    if (!isDraggingSecondScrollbar) return;
    
    const activeSlide = document.querySelector('.text-slide.second.active');
    const trackRect = secondScrollbarTrack.getBoundingClientRect();
    const thumbHeight = secondScrollbarThumb.offsetHeight;
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    
    let newTop = e.clientY - trackRect.top - (thumbHeight / 2);
    newTop = Math.max(0, Math.min(newTop, trackRect.height - thumbHeight));
    secondScrollbarThumb.style.top = newTop + 'px';
    
    const scrollRatio = newTop / (trackRect.height - thumbHeight);
    const maxScrollTop = scrollHeight - clientHeight;
    activeSlide.scrollTop = scrollRatio * maxScrollTop;
}

function handleSecondTrackClick(e) {
    const activeSlide = document.querySelector('.text-slide.second.active');
    const trackRect = secondScrollbarTrack.getBoundingClientRect();
    const thumbHeight = secondScrollbarThumb.offsetHeight;
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    
    const clickY = e.clientY - trackRect.top;
    const newTop = Math.max(0, Math.min(clickY - (thumbHeight / 2), trackRect.height - thumbHeight));
    secondScrollbarThumb.style.top = newTop + 'px';
    
    const scrollRatio = newTop / (trackRect.height - thumbHeight);
    const maxScrollTop = scrollHeight - clientHeight;
    activeSlide.scrollTop = scrollRatio * maxScrollTop;
}

function startSecondTextDrag(e) {
    const activeSlide = document.querySelector('.text-slide.second.active');
    if (!activeSlide) return;
    
    isDraggingSecondText = true;
    secondTextDragStartY = e.clientY;
    secondTextScrollStartTop = activeSlide.scrollTop;
    secondTextContainer.style.cursor = 'grabbing';
    e.preventDefault();
    document.addEventListener('mousemove', handleSecondTextDrag);
    document.addEventListener('mouseup', stopSecondTextDrag);
}

function handleSecondTextDrag(e) {
    if (!isDraggingSecondText) return;
    
    const activeSlide = document.querySelector('.text-slide.second.active');
    if (!activeSlide) return;
    
    const deltaY = secondTextDragStartY - e.clientY;
    activeSlide.scrollTop = secondTextScrollStartTop + deltaY;
    updateSecondScrollbar();
}

function stopSecondTextDrag() {
    isDraggingSecondText = false;
    secondTextContainer.style.cursor = 'grab';
    document.removeEventListener('mousemove', handleSecondTextDrag);
    document.removeEventListener('mouseup', stopSecondTextDrag);
}

function handleSecondWheel(e) {
    const activeSlide = document.querySelector('.text-slide.second.active');
    if (!activeSlide) return;
    
    activeSlide.scrollTop += e.deltaY;
    e.preventDefault();
    updateSecondScrollbar();
}

// блок 3
function updateThirdScrollbar() {
    const activeSlide = document.querySelector('.text-slide.third.active');
    if (!activeSlide || !thirdScrollbarTrack || !thirdScrollbarThumb) return;
    
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    const scrollTop = activeSlide.scrollTop;
    const trackHeight = thirdScrollbarTrack.clientHeight;
    
    if (scrollHeight <= clientHeight) {
        thirdScrollbarThumb.style.display = 'none';
        return;
    }
    
    thirdScrollbarThumb.style.display = 'block';
    const thumbHeight = Math.max(trackHeight * (clientHeight / scrollHeight), 20);
    thirdScrollbarThumb.style.height = thumbHeight + 'px';
    const maxScroll = scrollHeight - clientHeight;
    const thumbTop = (scrollTop / maxScroll) * (trackHeight - thumbHeight);
    thirdScrollbarThumb.style.top = thumbTop + 'px';
}

function setupThirdEventListeners() {
    if (!thirdScrollbarThumb || !thirdScrollbarTrack || !thirdTextContainer) return;
    
    thirdScrollbarThumb.addEventListener('mousedown', startThirdScrollbarDrag);
    document.addEventListener('mouseup', stopThirdScrollbarDrag);
    document.addEventListener('mousemove', handleThirdScrollbarDrag);
    thirdScrollbarTrack.addEventListener('click', handleThirdTrackClick);
    thirdTextContainer.addEventListener('mousedown', startThirdTextDrag);
    thirdTextContainer.addEventListener('wheel', handleThirdWheel);
}

function startThirdScrollbarDrag(e) {
    isDraggingThirdScrollbar = true;
    thirdScrollbarThumb.style.backgroundColor = '#95d32a';
    e.preventDefault();
}

function stopThirdScrollbarDrag() {
    isDraggingThirdScrollbar = false;
    thirdScrollbarThumb.style.backgroundColor = '#B2F142';
}

function handleThirdScrollbarDrag(e) {
    if (!isDraggingThirdScrollbar) return;
    
    const activeSlide = document.querySelector('.text-slide.third.active');
    const trackRect = thirdScrollbarTrack.getBoundingClientRect();
    const thumbHeight = thirdScrollbarThumb.offsetHeight;
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    
    let newTop = e.clientY - trackRect.top - (thumbHeight / 2);
    newTop = Math.max(0, Math.min(newTop, trackRect.height - thumbHeight));
    thirdScrollbarThumb.style.top = newTop + 'px';
    
    const scrollRatio = newTop / (trackRect.height - thumbHeight);
    const maxScrollTop = scrollHeight - clientHeight;
    activeSlide.scrollTop = scrollRatio * maxScrollTop;
}

function handleThirdTrackClick(e) {
    const activeSlide = document.querySelector('.text-slide.third.active');
    const trackRect = thirdScrollbarTrack.getBoundingClientRect();
    const thumbHeight = thirdScrollbarThumb.offsetHeight;
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    
    const clickY = e.clientY - trackRect.top;
    const newTop = Math.max(0, Math.min(clickY - (thumbHeight / 2), trackRect.height - thumbHeight));
    thirdScrollbarThumb.style.top = newTop + 'px';
    
    const scrollRatio = newTop / (trackRect.height - thumbHeight);
    const maxScrollTop = scrollHeight - clientHeight;
    activeSlide.scrollTop = scrollRatio * maxScrollTop;
}

function startThirdTextDrag(e) {
    const activeSlide = document.querySelector('.text-slide.third.active');
    if (!activeSlide) return;
    
    isDraggingThirdText = true;
    thirdTextDragStartY = e.clientY;
    thirdTextScrollStartTop = activeSlide.scrollTop;
    thirdTextContainer.style.cursor = 'grabbing';
    e.preventDefault();
    document.addEventListener('mousemove', handleThirdTextDrag);
    document.addEventListener('mouseup', stopThirdTextDrag);
}

function handleThirdTextDrag(e) {
    if (!isDraggingThirdText) return;
    
    const activeSlide = document.querySelector('.text-slide.third.active');
    if (!activeSlide) return;
    
    const deltaY = thirdTextDragStartY - e.clientY;
    activeSlide.scrollTop = thirdTextScrollStartTop + deltaY;
    updateThirdScrollbar();
}

function stopThirdTextDrag() {
    isDraggingThirdText = false;
    thirdTextContainer.style.cursor = 'grab';
    document.removeEventListener('mousemove', handleThirdTextDrag);
    document.removeEventListener('mouseup', stopThirdTextDrag);
}

function handleThirdWheel(e) {
    const activeSlide = document.querySelector('.text-slide.third.active');
    if (!activeSlide) return;
    
    activeSlide.scrollTop += e.deltaY;
    e.preventDefault();
    updateThirdScrollbar();
}

// блок 4
function updateFourthScrollbar() {
    const activeSlide = document.querySelector('.text-slide.fourth.active');
    if (!activeSlide || !fourthScrollbarTrack || !fourthScrollbarThumb) return;
    
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    const scrollTop = activeSlide.scrollTop;
    const trackHeight = fourthScrollbarTrack.clientHeight;
    
    if (scrollHeight <= clientHeight) {
        fourthScrollbarThumb.style.display = 'none';
        return;
    }
    
    fourthScrollbarThumb.style.display = 'block';
    const thumbHeight = Math.max(trackHeight * (clientHeight / scrollHeight), 20);
    fourthScrollbarThumb.style.height = thumbHeight + 'px';
    const maxScroll = scrollHeight - clientHeight;
    const thumbTop = (scrollTop / maxScroll) * (trackHeight - thumbHeight);
    fourthScrollbarThumb.style.top = thumbTop + 'px';
}

function setupFourthEventListeners() {
    if (!fourthScrollbarThumb || !fourthScrollbarTrack || !fourthTextContainer) return;
    
    fourthScrollbarThumb.addEventListener('mousedown', startFourthScrollbarDrag);
    document.addEventListener('mouseup', stopFourthScrollbarDrag);
    document.addEventListener('mousemove', handleFourthScrollbarDrag);
    fourthScrollbarTrack.addEventListener('click', handleFourthTrackClick);
    fourthTextContainer.addEventListener('mousedown', startFourthTextDrag);
    fourthTextContainer.addEventListener('wheel', handleFourthWheel);
}

function startFourthScrollbarDrag(e) {
    isDraggingFourthScrollbar = true;
    fourthScrollbarThumb.style.backgroundColor = '#a07be0';
    e.preventDefault();
}

function stopFourthScrollbarDrag() {
    isDraggingFourthScrollbar = false;
    fourthScrollbarThumb.style.backgroundColor = '#B287FD';
}

function handleFourthScrollbarDrag(e) {
    if (!isDraggingFourthScrollbar) return;
    
    const activeSlide = document.querySelector('.text-slide.fourth.active');
    const trackRect = fourthScrollbarTrack.getBoundingClientRect();
    const thumbHeight = fourthScrollbarThumb.offsetHeight;
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    
    let newTop = e.clientY - trackRect.top - (thumbHeight / 2);
    newTop = Math.max(0, Math.min(newTop, trackRect.height - thumbHeight));
    fourthScrollbarThumb.style.top = newTop + 'px';
    
    const scrollRatio = newTop / (trackRect.height - thumbHeight);
    const maxScrollTop = scrollHeight - clientHeight;
    activeSlide.scrollTop = scrollRatio * maxScrollTop;
}

function handleFourthTrackClick(e) {
    const activeSlide = document.querySelector('.text-slide.fourth.active');
    const trackRect = fourthScrollbarTrack.getBoundingClientRect();
    const thumbHeight = fourthScrollbarThumb.offsetHeight;
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    
    const clickY = e.clientY - trackRect.top;
    const newTop = Math.max(0, Math.min(clickY - (thumbHeight / 2), trackRect.height - thumbHeight));
    fourthScrollbarThumb.style.top = newTop + 'px';
    
    const scrollRatio = newTop / (trackRect.height - thumbHeight);
    const maxScrollTop = scrollHeight - clientHeight;
    activeSlide.scrollTop = scrollRatio * maxScrollTop;
}

function startFourthTextDrag(e) {
    const activeSlide = document.querySelector('.text-slide.fourth.active');
    if (!activeSlide) return;
    
    isDraggingFourthText = true;
    fourthTextDragStartY = e.clientY;
    fourthTextScrollStartTop = activeSlide.scrollTop;
    fourthTextContainer.style.cursor = 'grabbing';
    e.preventDefault();
    document.addEventListener('mousemove', handleFourthTextDrag);
    document.addEventListener('mouseup', stopFourthTextDrag);
}

function handleFourthTextDrag(e) {
    if (!isDraggingFourthText) return;
    
    const activeSlide = document.querySelector('.text-slide.fourth.active');
    if (!activeSlide) return;
    
    const deltaY = fourthTextDragStartY - e.clientY;
    activeSlide.scrollTop = fourthTextScrollStartTop + deltaY;
    updateFourthScrollbar();
}

function stopFourthTextDrag() {
    isDraggingFourthText = false;
    fourthTextContainer.style.cursor = 'grab';
    document.removeEventListener('mousemove', handleFourthTextDrag);
    document.removeEventListener('mouseup', stopFourthTextDrag);
}

function handleFourthWheel(e) {
    const activeSlide = document.querySelector('.text-slide.fourth.active');
    if (!activeSlide) return;
    
    activeSlide.scrollTop += e.deltaY;
    e.preventDefault();
    updateFourthScrollbar();
}

// блок 5
function updateFifthScrollbar() {
    const activeSlide = document.querySelector('.text-slide.fifth.active');
    if (!activeSlide || !fifthScrollbarTrack || !fifthScrollbarThumb) return;
    
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    const scrollTop = activeSlide.scrollTop;
    const trackHeight = fifthScrollbarTrack.clientHeight;
    
    if (scrollHeight <= clientHeight) {
        fifthScrollbarThumb.style.display = 'none';
        return;
    }
    
    fifthScrollbarThumb.style.display = 'block';
    const thumbHeight = Math.max(trackHeight * (clientHeight / scrollHeight), 20);
    fifthScrollbarThumb.style.height = thumbHeight + 'px';
    const maxScroll = scrollHeight - clientHeight;
    const thumbTop = (scrollTop / maxScroll) * (trackHeight - thumbHeight);
    fifthScrollbarThumb.style.top = thumbTop + 'px';
}

function setupFifthEventListeners() {
    if (!fifthScrollbarThumb || !fifthScrollbarTrack || !fifthTextContainer) return;
    
    fifthScrollbarThumb.addEventListener('mousedown', startFifthScrollbarDrag);
    document.addEventListener('mouseup', stopFifthScrollbarDrag);
    document.addEventListener('mousemove', handleFifthScrollbarDrag);
    fifthScrollbarTrack.addEventListener('click', handleFifthTrackClick);
    fifthTextContainer.addEventListener('mousedown', startFifthTextDrag);
    fifthTextContainer.addEventListener('wheel', handleFifthWheel);
}

function startFifthScrollbarDrag(e) {
    isDraggingFifthScrollbar = true;
    fifthScrollbarThumb.style.backgroundColor = '#95d32a';
    e.preventDefault();
}

function stopFifthScrollbarDrag() {
    isDraggingFifthScrollbar = false;
    fifthScrollbarThumb.style.backgroundColor = '#B2F142';
}

function handleFifthScrollbarDrag(e) {
    if (!isDraggingFifthScrollbar) return;
    
    const activeSlide = document.querySelector('.text-slide.fifth.active');
    const trackRect = fifthScrollbarTrack.getBoundingClientRect();
    const thumbHeight = fifthScrollbarThumb.offsetHeight;
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    
    let newTop = e.clientY - trackRect.top - (thumbHeight / 2);
    newTop = Math.max(0, Math.min(newTop, trackRect.height - thumbHeight));
    fifthScrollbarThumb.style.top = newTop + 'px';
    
    const scrollRatio = newTop / (trackRect.height - thumbHeight);
    const maxScrollTop = scrollHeight - clientHeight;
    activeSlide.scrollTop = scrollRatio * maxScrollTop;
}

function handleFifthTrackClick(e) {
    const activeSlide = document.querySelector('.text-slide.fifth.active');
    const trackRect = fifthScrollbarTrack.getBoundingClientRect();
    const thumbHeight = fifthScrollbarThumb.offsetHeight;
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    
    const clickY = e.clientY - trackRect.top;
    const newTop = Math.max(0, Math.min(clickY - (thumbHeight / 2), trackRect.height - thumbHeight));
    fifthScrollbarThumb.style.top = newTop + 'px';
    
    const scrollRatio = newTop / (trackRect.height - thumbHeight);
    const maxScrollTop = scrollHeight - clientHeight;
    activeSlide.scrollTop = scrollRatio * maxScrollTop;
}

function startFifthTextDrag(e) {
    const activeSlide = document.querySelector('.text-slide.fifth.active');
    if (!activeSlide) return;
    
    isDraggingFifthText = true;
    fifthTextDragStartY = e.clientY;
    fifthTextScrollStartTop = activeSlide.scrollTop;
    fifthTextContainer.style.cursor = 'grabbing';
    e.preventDefault();
    document.addEventListener('mousemove', handleFifthTextDrag);
    document.addEventListener('mouseup', stopFifthTextDrag);
}

function handleFifthTextDrag(e) {
    if (!isDraggingFifthText) return;
    
    const activeSlide = document.querySelector('.text-slide.fifth.active');
    if (!activeSlide) return;
    
    const deltaY = fifthTextDragStartY - e.clientY;
    activeSlide.scrollTop = fifthTextScrollStartTop + deltaY;
    updateFifthScrollbar();
}

function stopFifthTextDrag() {
    isDraggingFifthText = false;
    fifthTextContainer.style.cursor = 'grab';
    document.removeEventListener('mousemove', handleFifthTextDrag);
    document.removeEventListener('mouseup', stopFifthTextDrag);
}

function handleFifthWheel(e) {
    const activeSlide = document.querySelector('.text-slide.fifth.active');
    if (!activeSlide) return;
    
    activeSlide.scrollTop += e.deltaY;
    e.preventDefault();
    updateFifthScrollbar();
}

// блок 6
function updateSixthScrollbar() {
    const activeSlide = document.querySelector('.text-slide.sixth.active');
    if (!activeSlide || !sixthScrollbarTrack || !sixthScrollbarThumb) return;
    
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    const scrollTop = activeSlide.scrollTop;
    const trackHeight = sixthScrollbarTrack.clientHeight;
    
    if (scrollHeight <= clientHeight) {
        sixthScrollbarThumb.style.display = 'none';
        return;
    }
    
    sixthScrollbarThumb.style.display = 'block';
    const thumbHeight = Math.max(trackHeight * (clientHeight / scrollHeight), 20);
    sixthScrollbarThumb.style.height = thumbHeight + 'px';
    const maxScroll = scrollHeight - clientHeight;
    const thumbTop = (scrollTop / maxScroll) * (trackHeight - thumbHeight);
    sixthScrollbarThumb.style.top = thumbTop + 'px';
}

function setupSixthEventListeners() {
    if (!sixthScrollbarThumb || !sixthScrollbarTrack || !sixthTextContainer) return;
    
    sixthScrollbarThumb.addEventListener('mousedown', startSixthScrollbarDrag);
    document.addEventListener('mouseup', stopSixthScrollbarDrag);
    document.addEventListener('mousemove', handleSixthScrollbarDrag);
    sixthScrollbarTrack.addEventListener('click', handleSixthTrackClick);
    sixthTextContainer.addEventListener('mousedown', startSixthTextDrag);
    sixthTextContainer.addEventListener('wheel', handleSixthWheel);
}

function startSixthScrollbarDrag(e) {
    isDraggingSixthScrollbar = true;
    sixthScrollbarThumb.style.backgroundColor = '#a07be0';
    e.preventDefault();
}

function stopSixthScrollbarDrag() {
    isDraggingSixthScrollbar = false;
    sixthScrollbarThumb.style.backgroundColor = '#B287FD';
}

function handleSixthScrollbarDrag(e) {
    if (!isDraggingSixthScrollbar) return;
    
    const activeSlide = document.querySelector('.text-slide.sixth.active');
    const trackRect = sixthScrollbarTrack.getBoundingClientRect();
    const thumbHeight = sixthScrollbarThumb.offsetHeight;
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    
    let newTop = e.clientY - trackRect.top - (thumbHeight / 2);
    newTop = Math.max(0, Math.min(newTop, trackRect.height - thumbHeight));
    sixthScrollbarThumb.style.top = newTop + 'px';
    
    const scrollRatio = newTop / (trackRect.height - thumbHeight);
    const maxScrollTop = scrollHeight - clientHeight;
    activeSlide.scrollTop = scrollRatio * maxScrollTop;
}

function handleSixthTrackClick(e) {
    const activeSlide = document.querySelector('.text-slide.sixth.active');
    const trackRect = sixthScrollbarTrack.getBoundingClientRect();
    const thumbHeight = sixthScrollbarThumb.offsetHeight;
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    
    const clickY = e.clientY - trackRect.top;
    const newTop = Math.max(0, Math.min(clickY - (thumbHeight / 2), trackRect.height - thumbHeight));
    sixthScrollbarThumb.style.top = newTop + 'px';
    
    const scrollRatio = newTop / (trackRect.height - thumbHeight);
    const maxScrollTop = scrollHeight - clientHeight;
    activeSlide.scrollTop = scrollRatio * maxScrollTop;
}

function startSixthTextDrag(e) {
    const activeSlide = document.querySelector('.text-slide.sixth.active');
    if (!activeSlide) return;
    
    isDraggingSixthText = true;
    sixthTextDragStartY = e.clientY;
    sixthTextScrollStartTop = activeSlide.scrollTop;
    sixthTextContainer.style.cursor = 'grabbing';
    e.preventDefault();
    document.addEventListener('mousemove', handleSixthTextDrag);
    document.addEventListener('mouseup', stopSixthTextDrag);
}

function handleSixthTextDrag(e) {
    if (!isDraggingSixthText) return;
    
    const activeSlide = document.querySelector('.text-slide.sixth.active');
    if (!activeSlide) return;
    
    const deltaY = sixthTextDragStartY - e.clientY;
    activeSlide.scrollTop = sixthTextScrollStartTop + deltaY;
    updateSixthScrollbar();
}

function stopSixthTextDrag() {
    isDraggingSixthText = false;
    sixthTextContainer.style.cursor = 'grab';
    document.removeEventListener('mousemove', handleSixthTextDrag);
    document.removeEventListener('mouseup', stopSixthTextDrag);
}

function handleSixthWheel(e) {
    const activeSlide = document.querySelector('.text-slide.sixth.active');
    if (!activeSlide) return;
    
    activeSlide.scrollTop += e.deltaY;
    e.preventDefault();
    updateSixthScrollbar();
}

// блок 7
function updateSeventhScrollbar() {
    const activeSlide = document.querySelector('.text-slide.seventh.active');
    if (!activeSlide || !seventhScrollbarTrack || !seventhScrollbarThumb) return;
    
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    const scrollTop = activeSlide.scrollTop;
    const trackHeight = seventhScrollbarTrack.clientHeight;
    
    if (scrollHeight <= clientHeight) {
        seventhScrollbarThumb.style.display = 'none';
        return;
    }
    
    seventhScrollbarThumb.style.display = 'block';
    const thumbHeight = Math.max(trackHeight * (clientHeight / scrollHeight), 20);
    seventhScrollbarThumb.style.height = thumbHeight + 'px';
    const maxScroll = scrollHeight - clientHeight;
    const thumbTop = (scrollTop / maxScroll) * (trackHeight - thumbHeight);
    seventhScrollbarThumb.style.top = thumbTop + 'px';
}

function setupSeventhEventListeners() {
    if (!seventhScrollbarThumb || !seventhScrollbarTrack || !seventhTextContainer) return;
    
    seventhScrollbarThumb.addEventListener('mousedown', startSeventhScrollbarDrag);
    document.addEventListener('mouseup', stopSeventhScrollbarDrag);
    document.addEventListener('mousemove', handleSeventhScrollbarDrag);
    seventhScrollbarTrack.addEventListener('click', handleSeventhTrackClick);
    seventhTextContainer.addEventListener('mousedown', startSeventhTextDrag);
    seventhTextContainer.addEventListener('wheel', handleSeventhWheel);
}

function startSeventhScrollbarDrag(e) {
    isDraggingSeventhScrollbar = true;
    seventhScrollbarThumb.style.backgroundColor = '#a07be0';
    e.preventDefault();
}

function stopSeventhScrollbarDrag() {
    isDraggingSeventhScrollbar = false;
    seventhScrollbarThumb.style.backgroundColor = '#B287FD';
}

function handleSeventhScrollbarDrag(e) {
    if (!isDraggingSeventhScrollbar) return;
    
    const activeSlide = document.querySelector('.text-slide.seventh.active');
    const trackRect = seventhScrollbarTrack.getBoundingClientRect();
    const thumbHeight = seventhScrollbarThumb.offsetHeight;
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    
    let newTop = e.clientY - trackRect.top - (thumbHeight / 2);
    newTop = Math.max(0, Math.min(newTop, trackRect.height - thumbHeight));
    seventhScrollbarThumb.style.top = newTop + 'px';
    
    const scrollRatio = newTop / (trackRect.height - thumbHeight);
    const maxScrollTop = scrollHeight - clientHeight;
    activeSlide.scrollTop = scrollRatio * maxScrollTop;
}

function handleSeventhTrackClick(e) {
    const activeSlide = document.querySelector('.text-slide.seventh.active');
    const trackRect = seventhScrollbarTrack.getBoundingClientRect();
    const thumbHeight = seventhScrollbarThumb.offsetHeight;
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    
    const clickY = e.clientY - trackRect.top;
    const newTop = Math.max(0, Math.min(clickY - (thumbHeight / 2), trackRect.height - thumbHeight));
    seventhScrollbarThumb.style.top = newTop + 'px';
    
    const scrollRatio = newTop / (trackRect.height - thumbHeight);
    const maxScrollTop = scrollHeight - clientHeight;
    activeSlide.scrollTop = scrollRatio * maxScrollTop;
}

function startSeventhTextDrag(e) {
    const activeSlide = document.querySelector('.text-slide.seventh.active');
    if (!activeSlide) return;
    
    isDraggingSeventhText = true;
    seventhTextDragStartY = e.clientY;
    seventhTextScrollStartTop = activeSlide.scrollTop;
    seventhTextContainer.style.cursor = 'grabbing';
    e.preventDefault();
    document.addEventListener('mousemove', handleSeventhTextDrag);
    document.addEventListener('mouseup', stopSeventhTextDrag);
}

function handleSeventhTextDrag(e) {
    if (!isDraggingSeventhText) return;
    
    const activeSlide = document.querySelector('.text-slide.seventh.active');
    if (!activeSlide) return;
    
    const deltaY = seventhTextDragStartY - e.clientY;
    activeSlide.scrollTop = seventhTextScrollStartTop + deltaY;
    updateSeventhScrollbar();
}

function stopSeventhTextDrag() {
    isDraggingSeventhText = false;
    seventhTextContainer.style.cursor = 'grab';
    document.removeEventListener('mousemove', handleSeventhTextDrag);
    document.removeEventListener('mouseup', stopSeventhTextDrag);
}

function handleSeventhWheel(e) {
    const activeSlide = document.querySelector('.text-slide.seventh.active');
    if (!activeSlide) return;
    
    activeSlide.scrollTop += e.deltaY;
    e.preventDefault();
    updateSeventhScrollbar();
}

// блок 8
function updateEighthScrollbar() {
    const activeSlide = document.querySelector('.text-slide.eighth.active');
    if (!activeSlide || !eighthScrollbarTrack || !eighthScrollbarThumb) return;
    
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    const scrollTop = activeSlide.scrollTop;
    const trackHeight = eighthScrollbarTrack.clientHeight;
    
    if (scrollHeight <= clientHeight) {
        eighthScrollbarThumb.style.display = 'none';
        return;
    }
    
    eighthScrollbarThumb.style.display = 'block';
    const thumbHeight = Math.max(trackHeight * (clientHeight / scrollHeight), 20);
    eighthScrollbarThumb.style.height = thumbHeight + 'px';
    const maxScroll = scrollHeight - clientHeight;
    const thumbTop = (scrollTop / maxScroll) * (trackHeight - thumbHeight);
    eighthScrollbarThumb.style.top = thumbTop + 'px';
}

function setupEighthEventListeners() {
    if (!eighthScrollbarThumb || !eighthScrollbarTrack || !eighthTextContainer) return;
    
    eighthScrollbarThumb.addEventListener('mousedown', startEighthScrollbarDrag);
    document.addEventListener('mouseup', stopEighthScrollbarDrag);
    document.addEventListener('mousemove', handleEighthScrollbarDrag);
    eighthScrollbarTrack.addEventListener('click', handleEighthTrackClick);
    eighthTextContainer.addEventListener('mousedown', startEighthTextDrag);
    eighthTextContainer.addEventListener('wheel', handleEighthWheel);
}

function startEighthScrollbarDrag(e) {
    isDraggingEighthScrollbar = true;
    eighthScrollbarThumb.style.backgroundColor = '#a07be0';
    e.preventDefault();
}

function stopEighthScrollbarDrag() {
    isDraggingEighthScrollbar = false;
    eighthScrollbarThumb.style.backgroundColor = '#B287FD';
}

function handleEighthScrollbarDrag(e) {
    if (!isDraggingEighthScrollbar) return;
    
    const activeSlide = document.querySelector('.text-slide.eighth.active');
    const trackRect = eighthScrollbarTrack.getBoundingClientRect();
    const thumbHeight = eighthScrollbarThumb.offsetHeight;
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    
    let newTop = e.clientY - trackRect.top - (thumbHeight / 2);
    newTop = Math.max(0, Math.min(newTop, trackRect.height - thumbHeight));
    eighthScrollbarThumb.style.top = newTop + 'px';
    
    const scrollRatio = newTop / (trackRect.height - thumbHeight);
    const maxScrollTop = scrollHeight - clientHeight;
    activeSlide.scrollTop = scrollRatio * maxScrollTop;
}

function handleEighthTrackClick(e) {
    const activeSlide = document.querySelector('.text-slide.eighth.active');
    const trackRect = eighthScrollbarTrack.getBoundingClientRect();
    const thumbHeight = eighthScrollbarThumb.offsetHeight;
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    
    const clickY = e.clientY - trackRect.top;
    const newTop = Math.max(0, Math.min(clickY - (thumbHeight / 2), trackRect.height - thumbHeight));
    eighthScrollbarThumb.style.top = newTop + 'px';
    
    const scrollRatio = newTop / (trackRect.height - thumbHeight);
    const maxScrollTop = scrollHeight - clientHeight;
    activeSlide.scrollTop = scrollRatio * maxScrollTop;
}

function startEighthTextDrag(e) {
    const activeSlide = document.querySelector('.text-slide.eighth.active');
    if (!activeSlide) return;
    
    isDraggingEighthText = true;
    eighthTextDragStartY = e.clientY;
    eighthTextScrollStartTop = activeSlide.scrollTop;
    eighthTextContainer.style.cursor = 'grabbing';
    e.preventDefault();
    document.addEventListener('mousemove', handleEighthTextDrag);
    document.addEventListener('mouseup', stopEighthTextDrag);
}

function handleEighthTextDrag(e) {
    if (!isDraggingEighthText) return;
    
    const activeSlide = document.querySelector('.text-slide.eighth.active');
    if (!activeSlide) return;
    
    const deltaY = eighthTextDragStartY - e.clientY;
    activeSlide.scrollTop = eighthTextScrollStartTop + deltaY;
    updateEighthScrollbar();
}

function stopEighthTextDrag() {
    isDraggingEighthText = false;
    eighthTextContainer.style.cursor = 'grab';
    document.removeEventListener('mousemove', handleEighthTextDrag);
    document.removeEventListener('mouseup', stopEighthTextDrag);
}

function handleEighthWheel(e) {
    const activeSlide = document.querySelector('.text-slide.eighth.active');
    if (!activeSlide) return;
    
    activeSlide.scrollTop += e.deltaY;
    e.preventDefault();
    updateEighthScrollbar();
}

// блок 9
function updateNinthScrollbar() {
    const activeSlide = document.querySelector('.text-slide.ninth.active');
    if (!activeSlide || !ninthScrollbarTrack || !ninthScrollbarThumb) return;
    
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    const scrollTop = activeSlide.scrollTop;
    const trackHeight = ninthScrollbarTrack.clientHeight;
    
    if (scrollHeight <= clientHeight) {
        ninthScrollbarThumb.style.display = 'none';
        return;
    }
    
    ninthScrollbarThumb.style.display = 'block';
    const thumbHeight = Math.max(trackHeight * (clientHeight / scrollHeight), 20);
    ninthScrollbarThumb.style.height = thumbHeight + 'px';
    const maxScroll = scrollHeight - clientHeight;
    const thumbTop = (scrollTop / maxScroll) * (trackHeight - thumbHeight);
    ninthScrollbarThumb.style.top = thumbTop + 'px';
}

function setupNinthEventListeners() {
    if (!ninthScrollbarThumb || !ninthScrollbarTrack || !ninthTextContainer) return;
    
    ninthScrollbarThumb.addEventListener('mousedown', startNinthScrollbarDrag);
    document.addEventListener('mouseup', stopNinthScrollbarDrag);
    document.addEventListener('mousemove', handleNinthScrollbarDrag);
    ninthScrollbarTrack.addEventListener('click', handleNinthTrackClick);
    ninthTextContainer.addEventListener('mousedown', startNinthTextDrag);
    ninthTextContainer.addEventListener('wheel', handleNinthWheel);
}

function startNinthScrollbarDrag(e) {
    isDraggingNinthScrollbar = true;
    ninthScrollbarThumb.style.backgroundColor = '#a07be0';
    e.preventDefault();
}

function stopNinthScrollbarDrag() {
    isDraggingNinthScrollbar = false;
    ninthScrollbarThumb.style.backgroundColor = '#B287FD';
}

function handleNinthScrollbarDrag(e) {
    if (!isDraggingNinthScrollbar) return;
    
    const activeSlide = document.querySelector('.text-slide.ninth.active');
    const trackRect = ninthScrollbarTrack.getBoundingClientRect();
    const thumbHeight = ninthScrollbarThumb.offsetHeight;
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    
    let newTop = e.clientY - trackRect.top - (thumbHeight / 2);
    newTop = Math.max(0, Math.min(newTop, trackRect.height - thumbHeight));
    ninthScrollbarThumb.style.top = newTop + 'px';
    
    const scrollRatio = newTop / (trackRect.height - thumbHeight);
    const maxScrollTop = scrollHeight - clientHeight;
    activeSlide.scrollTop = scrollRatio * maxScrollTop;
}

function handleNinthTrackClick(e) {
    const activeSlide = document.querySelector('.text-slide.ninth.active');
    const trackRect = ninthScrollbarTrack.getBoundingClientRect();
    const thumbHeight = ninthScrollbarThumb.offsetHeight;
    const scrollHeight = activeSlide.scrollHeight;
    const clientHeight = activeSlide.clientHeight;
    
    const clickY = e.clientY - trackRect.top;
    const newTop = Math.max(0, Math.min(clickY - (thumbHeight / 2), trackRect.height - thumbHeight));
    ninthScrollbarThumb.style.top = newTop + 'px';
    
    const scrollRatio = newTop / (trackRect.height - thumbHeight);
    const maxScrollTop = scrollHeight - clientHeight;
    activeSlide.scrollTop = scrollRatio * maxScrollTop;
}

function startNinthTextDrag(e) {
    const activeSlide = document.querySelector('.text-slide.ninth.active');
    if (!activeSlide) return;
    
    isDraggingNinthText = true;
    ninthTextDragStartY = e.clientY;
    ninthTextScrollStartTop = activeSlide.scrollTop;
    ninthTextContainer.style.cursor = 'grabbing';
    e.preventDefault();
    document.addEventListener('mousemove', handleNinthTextDrag);
    document.addEventListener('mouseup', stopNinthTextDrag);
}

function handleNinthTextDrag(e) {
    if (!isDraggingNinthText) return;
    
    const activeSlide = document.querySelector('.text-slide.ninth.active');
    if (!activeSlide) return;
    
    const deltaY = ninthTextDragStartY - e.clientY;
    activeSlide.scrollTop = ninthTextScrollStartTop + deltaY;
    updateNinthScrollbar();
}

function stopNinthTextDrag() {
    isDraggingNinthText = false;
    ninthTextContainer.style.cursor = 'grab';
    document.removeEventListener('mousemove', handleNinthTextDrag);
    document.removeEventListener('mouseup', stopNinthTextDrag);
}

function handleNinthWheel(e) {
    const activeSlide = document.querySelector('.text-slide.ninth.active');
    if (!activeSlide) return;
    
    activeSlide.scrollTop += e.deltaY;
    e.preventDefault();
    updateNinthScrollbar();
}

// слайдеры

// Функции для первого слайдера
function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    textSlides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
    textSlides[currentSlide].classList.add('active');
    textSlides[currentSlide].scrollTop = 0;
    updateScrollbar();
}

function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }

// Функции для второго слайдера
function showSecondSlide(n) {
    secondSlides.forEach(slide => slide.classList.remove('active'));
    secondTextSlides.forEach(slide => slide.classList.remove('active'));
    currentSecondSlide = (n + totalSecondSlides) % totalSecondSlides;
    secondSlides[currentSecondSlide].classList.add('active');
    secondTextSlides[currentSecondSlide].classList.add('active');
    secondTextSlides[currentSecondSlide].scrollTop = 0;
    updateSecondScrollbar();
}

function nextSecondSlide() { showSecondSlide(currentSecondSlide + 1); }
function prevSecondSlide() { showSecondSlide(currentSecondSlide - 1); }

// Функции для третьего слайдера
function showThirdSlide(n) {
    thirdSlides.forEach(slide => slide.classList.remove('active'));
    thirdTextSlides.forEach(slide => slide.classList.remove('active'));
    currentThirdSlide = (n + totalThirdSlides) % totalThirdSlides;
    thirdSlides[currentThirdSlide].classList.add('active');
    thirdTextSlides[currentThirdSlide].classList.add('active');
    thirdTextSlides[currentThirdSlide].scrollTop = 0;
    updateThirdScrollbar();
}

function nextThirdSlide() { showThirdSlide(currentThirdSlide + 1); }
function prevThirdSlide() { showThirdSlide(currentThirdSlide - 1); }

// Функции для четвёртого слайдера
function showFourthSlide(n) {
    fourthSlides.forEach(slide => slide.classList.remove('active'));
    fourthTextSlides.forEach(slide => slide.classList.remove('active'));
    currentFourthSlide = (n + totalFourthSlides) % totalFourthSlides;
    fourthSlides[currentFourthSlide].classList.add('active');
    fourthTextSlides[currentFourthSlide].classList.add('active');
    fourthTextSlides[currentFourthSlide].scrollTop = 0;
    updateFourthScrollbar();
}

function nextFourthSlide() { showFourthSlide(currentFourthSlide + 1); }
function prevFourthSlide() { showFourthSlide(currentFourthSlide - 1); }

// Функции для пятого слайдера
function showFifthSlide(n) {
    fifthSlides.forEach(slide => slide.classList.remove('active'));
    fifthTextSlides.forEach(slide => slide.classList.remove('active'));
    currentFifthSlide = (n + totalFifthSlides) % totalFifthSlides;
    fifthSlides[currentFifthSlide].classList.add('active');
    fifthTextSlides[currentFifthSlide].classList.add('active');
    fifthTextSlides[currentFifthSlide].scrollTop = 0;
    updateFifthScrollbar();
}

function nextFifthSlide() { showFifthSlide(currentFifthSlide + 1); }
function prevFifthSlide() { showFifthSlide(currentFifthSlide - 1); }

// Функции для шестого слайдера
function showSixthSlide(n) {
    sixthSlides.forEach(slide => slide.classList.remove('active'));
    sixthTextSlides.forEach(slide => slide.classList.remove('active'));
    currentSixthSlide = (n + totalSixthSlides) % totalSixthSlides;
    sixthSlides[currentSixthSlide].classList.add('active');
    sixthTextSlides[currentSixthSlide].classList.add('active');
    sixthTextSlides[currentSixthSlide].scrollTop = 0;
    updateSixthScrollbar();
}

function nextSixthSlide() { showSixthSlide(currentSixthSlide + 1); }
function prevSixthSlide() { showSixthSlide(currentSixthSlide - 1); }

// Функции для седьмого слайдера
function showSeventhSlide(n) {
    seventhSlides.forEach(slide => slide.classList.remove('active'));
    seventhTextSlides.forEach(slide => slide.classList.remove('active'));
    currentSeventhSlide = (n + totalSeventhSlides) % totalSeventhSlides;
    seventhSlides[currentSeventhSlide].classList.add('active');
    seventhTextSlides[currentSeventhSlide].classList.add('active');
    seventhTextSlides[currentSeventhSlide].scrollTop = 0;
    updateSeventhScrollbar();
}

function nextSeventhSlide() { showSeventhSlide(currentSeventhSlide + 1); }
function prevSeventhSlide() { showSeventhSlide(currentSeventhSlide - 1); }

// Функции для восьмого слайдера
function showEighthSlide(n) {
    eighthSlides.forEach(slide => slide.classList.remove('active'));
    eighthTextSlides.forEach(slide => slide.classList.remove('active'));
    currentEighthSlide = (n + totalEighthSlides) % totalEighthSlides;
    eighthSlides[currentEighthSlide].classList.add('active');
    eighthTextSlides[currentEighthSlide].classList.add('active');
    eighthTextSlides[currentEighthSlide].scrollTop = 0;
    updateEighthScrollbar();
}

function nextEighthSlide() { showEighthSlide(currentEighthSlide + 1); }
function prevEighthSlide() { showEighthSlide(currentEighthSlide - 1); }

// Функции для девятого слайдера
function showNinthSlide(n) {
    ninthSlides.forEach(slide => slide.classList.remove('active'));
    ninthTextSlides.forEach(slide => slide.classList.remove('active'));
    currentNinthSlide = (n + totalNinthSlides) % totalNinthSlides;
    ninthSlides[currentNinthSlide].classList.add('active');
    ninthTextSlides[currentNinthSlide].classList.add('active');
    ninthTextSlides[currentninthSlide].scrollTop = 0;
    updateNinthScrollbar();
}

function nextNinthSlide() { showNinthSlide(currentNinthSlide + 1); }
function prevNinthSlide() { showNinthSlide(currentNinthSlide - 1); }

// Обновление всех скроллбаров при изменении размера окна
window.addEventListener('resize', function() {
    updateScrollbar();
    updateSecondScrollbar();
    updateThirdScrollbar();
    updateFourthScrollbar();
    updateFifthScrollbar();
    updateSixthScrollbar();
    updateSeventhScrollbar();
    updateEighthScrollbar();
    updateNinthScrollbar();
});

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', init);

// Функция для кнопки наверх
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // кнопка при прокрутке
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.style.opacity = '1';
                backToTopButton.style.visibility = 'visible';
            } else {
                backToTopButton.style.opacity = '0';
                backToTopButton.style.visibility = 'hidden';
            }
        });
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
        backToTopButton.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
    }
});