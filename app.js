window.addEventListener('load', () => {
    const layers = document.querySelectorAll('.layer');
    const layerItems = document.querySelectorAll('.layer-item');
    const secondAndthirdlayerItems = document.querySelectorAll('.layer.is--third .layer-item, .layer.is--second .layer-item');
    const thirdlayerItems = document.querySelectorAll('.layer.is--third .layer-item');
    const layerImages = document.querySelectorAll('.layer-item__image');
    const projectsWrapper = document.querySelector('.projects-wrapper');
    const projectsCloseButton = document.querySelector('.close-modal-button');
    const projectsSection = document.querySelector('.section');
    const projectsContentContainer = document.querySelector('.sticky .container');
    const button = document.querySelector('.button');

    const windowWidth = window.innerWidth;
    const params = {
        inertiaMultiplier: 0.955,
        inertiaThreshold: 0.5
    };
    const gallerySpeedDividerMobile = 80;
    const gallerySpeedDividerDesktop = 30;

    let mouseEvent = {}, touchEvent = {}, mouseObj = {};
    let mousePositionX = 0, mousePositionY = 0, mousePositionXDelta = 0,
        mousePositionYDelta = 0, thirdLayersPositionX = 0, thirdLayersPositionY = 0,
        startX = 0, startY = 0, scrollLeft = 0,
        scrollTop = 0, touchStartX = 0, touchStartY = 0,
        touchScrollLeft = 0, touchScrollTop = 0;
    let isProjectsModalOpen = false;
    let pointerIsMoving = false;
    let pointerTouchIsMoving = false;
    let isPointerDown = false;

    var velX = 0;
    var velY = 0;
    var momentumID;

    //functions
    const positionLayerItems = () => {
        if (windowWidth <= 767) {
            //first list
            layerItems[0].style.transform = `translate(${windowWidth / 0.682}px, ${windowWidth / 0.636}px) scale(1.25, 1.25)`;
            layerItems[1].style.transform = `translate(-${windowWidth / 2.403}px, ${windowWidth / 0.648}px) scale(1.25, 1.25)`;
            layerItems[2].style.transform = `translate(${windowWidth / 0.548}px, ${windowWidth / 2.15}px) scale(1.25, 1.25)`;
            layerItems[3].style.transform = `translate(${windowWidth / 8.547}px, ${windowWidth / 1.669}px) scale(1.25, 1.25)`;
            layerItems[4].style.transform = `translate(-${windowWidth / 0.424}px, ${windowWidth / 1.148}px) scale(1.25, 1.25)`;
            layerItems[5].style.transform = `translate(${windowWidth / 1.584}px, ${windowWidth / 8}px) scale(1.25, 1.25)`;
            layerItems[6].style.transform = `translate(-${windowWidth / 1.371}px, ${windowWidth / 4.651}px) scale(1.25, 1.25)`;
            layerItems[7].style.transform = `translate(${windowWidth / 1.203}px, -${windowWidth / 1.7}px) scale(1.25, 1.25)`;
            layerItems[8].style.transform = `translate(-${windowWidth / 0.911}px, -${windowWidth / 1.592}px) scale(1.25, 1.25)`;
            layerItems[9].style.transform = `translate(${windowWidth / 0.506}px, -${windowWidth / 0.864}px) scale(1.25, 1.25)`;
            layerItems[10].style.transform = `translate(${windowWidth / 6.535}px, -${windowWidth / 0.661}px) scale(1.25, 1.25)`;
            //second list
            layerItems[11].style.transform = `translate(${windowWidth / 1.669}px, ${windowWidth / 0.649}px) scale(1.25, 1.25)`;
            layerItems[12].style.transform = `translate(-${windowWidth / 0.688}px, ${windowWidth / 0.651}px) scale(1.25, 1.25)`;
            layerItems[13].style.transform = `translate(${windowWidth / 0.994}px, ${windowWidth / 1.362}px) scale(1.25, 1.25)`;
            layerItems[14].style.transform = `translate(-${windowWidth / 0.956}px, ${windowWidth / 1.264}px) scale(1.25, 1.25)`;
            layerItems[15].style.transform = `translate(${windowWidth / 0.506}px, -${windowWidth / 3.311}px) scale(1.25, 1.25)`;
            layerItems[16].style.transform = `translate(-${windowWidth / 10.869}px, -${windowWidth / 43.478}px) scale(1.25, 1.25)`;
            layerItems[17].style.transform = `translate(-${windowWidth / 0.527}px, ${windowWidth / 27.027}px) scale(1.25, 1.25)`;
            layerItems[18].style.transform = `translate(-${windowWidth / 26.315}px, -${windowWidth / 1.326}px) scale(1.25, 1.25)`;
            layerItems[19].style.transform = `translate(-${windowWidth / 0.508}px, -${windowWidth / 1.718}px) scale(1.25, 1.25)`;
            layerItems[20].style.transform = `translate(${windowWidth / 1.028}px, -${windowWidth / 0.829}px) scale(1.25, 1.25)`;
            layerItems[21].style.transform = `translate(-${windowWidth / 1.15}px, -${windowWidth / 0.714}px) scale(1.25, 1.25)`;
        } else {
            //first list
            layerItems[0].style.transform = `translate(${windowWidth / 1.387}px, ${windowWidth / 1.287}px) scale(1.1, 1.1)`;
            layerItems[1].style.transform = `translate(-${windowWidth / 4.87}px, ${windowWidth / 1.311}px) scale(1.1, 1.1)`;
            layerItems[2].style.transform = `translate(${windowWidth / 1.11}px, ${windowWidth / 4.36}px) scale(1.1, 1.1)`;
            layerItems[3].style.transform = `translate(${windowWidth / 17.197}px, ${windowWidth / 3.377}px) scale(1.1, 1.1)`;
            layerItems[4].style.transform = `translate(-${windowWidth / 0.857}px, ${windowWidth / 2.319}px) scale(1.1, 1.1)`;
            layerItems[5].style.transform = `translate(${windowWidth / 3.204}px, ${windowWidth / 16.283}px) scale(1.1, 1.1)`;
            layerItems[6].style.transform = `translate(-${windowWidth / 2.774}px, ${windowWidth / 178}px) scale(1.1, 1.1)`;
            layerItems[7].style.transform = `translate(${windowWidth / 2.437}px, -${windowWidth / 3.442}px) scale(1.1, 1.1)`;
            layerItems[8].style.transform = `translate(-${windowWidth / 1.843}px, -${windowWidth / 3.222}px) scale(1.1, 1.1)`;
            layerItems[9].style.transform = `translate(${windowWidth / 1.025}px, -${windowWidth / 1.744}px) scale(1.1, 1.1)`;
            layerItems[10].style.transform = `translate(${windowWidth / 13.218}px, -${windowWidth / 1.337}px) scale(1.1, 1.1)`;
            //second list
            layerItems[11].style.transform = `translate(${windowWidth / 3.389}px, ${windowWidth / 1.32}px) scale(1.1, 1.1)`;
            layerItems[12].style.transform = `translate(-${windowWidth / 1.398}px, ${windowWidth / 1.325}px) scale(1.1, 1.1)`;
            layerItems[13].style.transform = `translate(${windowWidth / 2.02}px, ${windowWidth / 2.772}px) scale(1.1, 1.1)`;
            layerItems[14].style.transform = `translate(-${windowWidth / 1.943}px, ${windowWidth / 2.57}px) scale(1.1, 1.1)`;
            layerItems[15].style.transform = `translate(${windowWidth / 1.029}px, -${windowWidth / 6.717}px) scale(1.1, 1.1)`;
            layerItems[16].style.transform = `translate(-${windowWidth / 22.066}px, -${windowWidth / 85.435}px) scale(1.1, 1.1)`;
            layerItems[17].style.transform = `translate(-${windowWidth / 1.071}px, ${windowWidth / 61.703}px) scale(1.1, 1.1)`;
            layerItems[18].style.transform = `translate(-${windowWidth / 51.261}px, -${windowWidth / 2.689}px) scale(1.1, 1.1)`;
            layerItems[19].style.transform = `translate(-${windowWidth / 1.033}px, -${windowWidth / 3.474}px) scale(1.1, 1.1)`;
            layerItems[20].style.transform = `translate(${windowWidth / 2.094}px, -${windowWidth / 1.684}px) scale(1.1, 1.1)`;
            layerItems[21].style.transform = `translate(-${windowWidth / 2.336}px, -${windowWidth / 1.45}px) scale(1.1, 1.1)`;
        }
    }

    const initializeProjectsLayers = () => {
        layers.forEach(layer => {
            layer.style.transform = "translate3d(0px, 0px, 0px)";
        })
        layerImages.forEach(layerImg => {
            layerImg.style.opacity = '1';
            layerImg.style.visibility = 'inherit';
        })
        thirdlayerItems.forEach(layerItem => {
            layerItem.style.visibility = 'hidden';
            layerItem.style.opacity = '0';
            layerItem.style.transform = 'scale(0.8, 0.8)';
        })
        projectsContentContainer.style.visibility = "inherit";
        projectsContentContainer.style.opacity = "1";
        positionLayerItems();
    }

    const openProjectsModal = () => {
        if (!isProjectsModalOpen) {
            projectsContentContainer.style.visibility = "hidden";
            projectsContentContainer.style.opacity = "0";
            projectsWrapper.style.cursor = "grab";
            projectsWrapper.style.pointerEvents = "all";
            layerItems.forEach((layerI) => {
                layerI.style.transform = "translate(0px, 0px) scale(1, 1)";
                layerI.style.transition = "opacity .5s cubic-bezier(.58, 0, .01, 1), transform .2s ease";
            });
            thirdlayerItems.forEach(layerItem => {
                layerItem.style.visibility = 'visible';
                layerItem.style.opacity = '1';
                layerItem.style.transform = 'scale(1, 1)';
            })
            projectsCloseButton.style.display = 'flex';
            isProjectsModalOpen = true;
            projectsSection.scrollIntoView({ behavior: 'smooth' });
            document.body.style.overflowY = 'hidden';
        }
    }

    const closeProjectsModal = () => {
        if (isProjectsModalOpen) {
            projectsContentContainer.style.visibility = "inherit";
            projectsContentContainer.style.opacity = "1";
            projectsWrapper.style.cursor = "pointer";
            projectsWrapper.style.pointerEvents = "auto";
            layers.forEach(layer => {
                layer.style.transform = "translate3d(0px, 0px, 0px)";
            })
            layerItems.forEach((layerI) => {
                layerI.style.transition = "opacity .5s cubic-bezier(.58, 0, .01, 1), transform .5s cubic-bezier(.645, .045, .355, 1)";
            });
            thirdlayerItems.forEach(layerItem => {
                layerItem.style.opacity = '0';
                layerItem.style.transform = 'scale(0.8, 0.8)';
                setTimeout(() => {
                    layerItem.style.visibility = 'hidden';
                }, 500)
            })
            projectsCloseButton.style.display = 'none';
            mousePositionX = 0;
            mousePositionY = 0;
            mousePositionXDelta = 0;
            mousePositionYDelta = 0;
            isProjectsModalOpen = false;
            document.body.style.overflowY = 'auto';
            positionLayerItems();
        }
    }

    function cancelMomentumTracking() {
        cancelAnimationFrame(momentumID);
    }

    function beginMomentumTracking() {
        cancelMomentumTracking();
        momentumID = requestAnimationFrame(momentumLoop);
    }

    function momentumLoop() {
        mousePositionX += velX;
        mousePositionY += velY;
        if (windowWidth <= 768) {
            layers.forEach(layer => {
                layer.style.transform = `translate3d(${Math.max(Math.min(-1 * mousePositionX, windowWidth * 2.3), -1 * windowWidth * 2.3)}px, ${Math.max(Math.min(-1 * mousePositionY, windowWidth * 1.35), -1 * windowWidth * 1.35)}px, 0px)`;
            })
        } else {
            layers.forEach(layer => {
                layer.style.transform = `translate3d(${Math.max(Math.min(-1 * mousePositionX, windowWidth / 1.124), -1 * windowWidth / 1.124)}px, ${Math.max(Math.min(-1 * mousePositionY, windowWidth / 1.34), -1 * windowWidth / 1.34)}px, 0px)`;
            })
        }
        velX *= params.inertiaMultiplier;
        velY *= params.inertiaMultiplier;
        if (Math.abs(velX) > params.inertiaThreshold) {
            momentumID = requestAnimationFrame(momentumLoop);
        }
    }

    function handleMouseDown(e) {
        isPointerDown = true;
        startX = e.pageX + mousePositionX;
        startY = e.pageY + mousePositionY;
        scrollLeft = mousePositionX;
        scrollTop = mousePositionY;
        cancelMomentumTracking();
    }

    function handleTouchStart(e) {
        isPointerDown = true;
        const touch = e.touches[0];
        touchStartX = touch.pageX + mousePositionX;
        touchStartY = touch.pageY + mousePositionY;
        touchScrollLeft = mousePositionX;
        touchScrollTop = mousePositionY;
        cancelMomentumTracking();
    }

    function handleMouseLeave() {
        isPointerDown = false;
    }

    function handleMouseUp() {
        isPointerDown = false;
        pointerIsMoving = false;
        thirdLayersPositionX = 0;
        thirdLayersPositionY = 0;
        beginMomentumTracking();
    }

    function handleTouchEnd() {
        isPointerDown = false;
        pointerTouchIsMoving = false;
        thirdLayersPositionX = 0;
        thirdLayersPositionY = 0;
        beginMomentumTracking();
    }

    function handleMouseMove(e) {
        if (!isPointerDown) return;
        e.preventDefault();
        mouseEvent = e;
        mouseObj = this;
        pointerIsMoving = true;
    }

    function handleTouchMove(e) {
        if (!isPointerDown) return;
        e.preventDefault();
        touchEvent = e;
        pointerTouchIsMoving = true;
    }

    function handleWheel(e) {
        closeProjectsModal();
        cancelMomentumTracking();
    }

    button.addEventListener('click', openProjectsModal);
    projectsCloseButton.addEventListener('click', closeProjectsModal);
    layers[0].addEventListener("mousedown", handleMouseDown);
    layers[0].addEventListener("touchstart", handleTouchStart);
    layers[0].addEventListener("mouseleave", handleMouseLeave);
    layers[0].addEventListener("mouseup", handleMouseUp);
    layers[0].addEventListener("touchend", handleTouchEnd);
    layers[0].addEventListener("mousemove", handleMouseMove);
    layers[0].addEventListener("touchmove", handleTouchMove);
    document.addEventListener("wheel", handleWheel);

    const renderDraggableGallery = () => {
        if (isPointerDown) {
            if (pointerIsMoving) {
                const x = mouseEvent.pageX - mouseObj.offsetLeft;
                const y = mouseEvent.pageY - mouseObj.offsetTop;
                const walk = (x - startX) * 3;
                const walkY = (y - startY) * 3;
                const prevScrollLeft = mousePositionX;
                const prevScrollTop = mousePositionY;

                mousePositionXDelta = (scrollLeft - walk) / 4;
                mousePositionYDelta = (scrollTop - walkY) / 4;
                mousePositionX = Math.max(Math.min(mousePositionXDelta, windowWidth / 1.124), -1 * windowWidth / 1.124);
                mousePositionY = Math.max(Math.min(mousePositionYDelta, windowWidth / 1.34), -1 * windowWidth / 1.34);
                layers.forEach(layer => {
                    layer.style.transform = `translate3d(${-1 * mousePositionX}px, ${-1 * mousePositionY}px, 0px)`;
                })
                thirdLayersPositionX = (scrollLeft - walk) / gallerySpeedDividerDesktop;
                thirdLayersPositionY = (scrollTop - walkY) / gallerySpeedDividerDesktop;
                secondAndthirdlayerItems.forEach(layerI => {
                    layerI.style.transform = `translate3d(${-1 * Math.max(Math.min(thirdLayersPositionX, 170), -170)}px, ${-1 * Math.max(Math.min(thirdLayersPositionY, 170), -170)}px, 0px)`;
                })
                velX = mousePositionX - prevScrollLeft;
                velY = mousePositionY - prevScrollTop;
            }
            else if (pointerTouchIsMoving) {
                const slider = touchEvent.target;
                const touch = touchEvent.touches[0];
                const x = touch.pageX - slider.offsetLeft;
                const y = touch.pageY - slider.offsetTop;
                const walk = (x - touchStartX) * 3;
                const walkY = (y - touchStartY) * 3;
                const prevScrollLeft = mousePositionX;
                const prevScrollTop = mousePositionY;

                mousePositionXDelta = (touchScrollLeft - walk) / 4;
                mousePositionYDelta = (touchScrollTop - walkY) / 4;
                if (windowWidth <= 768) {
                    mousePositionX = Math.max(Math.min(mousePositionXDelta, windowWidth * 2.3), -1 * windowWidth * 2.3);
                    mousePositionY = Math.max(Math.min(mousePositionYDelta, windowWidth * 1.35), -1 * windowWidth * 1.35);
                } else {
                    mousePositionX = Math.max(Math.min(mousePositionXDelta, windowWidth / 1.124), -1 * windowWidth / 1.124);
                    mousePositionY = Math.max(Math.min(mousePositionYDelta, windowWidth / 1.34), -1 * windowWidth / 1.34);
                }
                layers.forEach(layer => {
                    layer.style.transform = `translate3d(${-1 * mousePositionX}px, ${-1 * mousePositionY}px, 0px)`;
                })
                thirdLayersPositionX = (touchScrollLeft - walk) / gallerySpeedDividerMobile;
                thirdLayersPositionY = (touchScrollTop - walkY) / gallerySpeedDividerMobile;
                secondAndthirdlayerItems.forEach(layerI => {
                    layerI.style.transform = `translate3d(${-1 * Math.max(Math.min(thirdLayersPositionX, 170), -170)}px, ${-1 * Math.max(Math.min(thirdLayersPositionY, 170), -170)}px, 0px)`;
                })
                velX = mousePositionX - prevScrollLeft;
                velY = mousePositionY - prevScrollTop;
            }
        }

        window.requestAnimationFrame(renderDraggableGallery);
    }
    initializeProjectsLayers();
    window.requestAnimationFrame(renderDraggableGallery);
})