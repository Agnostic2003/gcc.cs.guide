
				// Get all video items
				const videoItems = document.querySelectorAll("#sem-videos .video-item");

				// Attach click event listener to each video item
				videoItems.forEach((videoItem) => {
				  const videoOverlay = videoItem.querySelector(".video-overlay");
				  const videoPlayButton = videoItem.querySelector(".video-play-button");
				  const videoIframe = videoItem.querySelector("iframe");

				  // Show/hide play button and overlay on hover
				  videoItem.addEventListener("mouseover", () => {
				    videoOverlay.style.opacity = "1";
				    videoPlayButton.style.opacity = "1";
				  });

				  videoItem.addEventListener("mouseout", () => {
				    videoOverlay.style.opacity = "0";
				    videoPlayButton.style.opacity = "0";
				  });

				  // Play video when clicked
				  videoItem.addEventListener("click", () => {
				    videoIframe.src += "?autoplay=1";
				    videoOverlay.style.display = "none";
				    videoPlayButton.style.display = "none";
				  });
				});
			