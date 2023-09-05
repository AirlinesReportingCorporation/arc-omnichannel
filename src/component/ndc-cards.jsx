import React, { Component } from "react";

export default class NDCLatest extends Component {
  render() {
    let recentNDCPosts = [
      ...document.querySelectorAll(".content-block--pageItem"),
    ];
    let latestMentions = [];
    let i = 0;
    while (i < recentNDCPosts.length) {
      let post = recentNDCPosts[i];
      let postTitle = post.querySelector(
        ".content-block--pageItem__title"
      ).innerText;
      let postUrl = post.querySelector(
        ".content-block--pageItem__title > a"
      ).href;
      let postCopy = post.querySelector(
        ".content-block--pageItem__body"
      ).innerText;

      latestMentions.push({
        title: postTitle,
        url: postUrl,
        copy: postCopy,
      });
      i++;
    }
    console.log(latestMentions);

    return (
      <div class="row">
        {latestMentions.map((post) => (
          <div class="col-lg-3">
            <a href={post.link} className="ndc-card-link">
              <div class="ndc-latest-card">
                <div class="ndc-latest-text">
                  <div class="ndc-latest-text-title">{post.title}</div>
                  <div class="ndc-latest-description">
                    <p>{post.copy}</p>
                  </div>
                  <a href={post.link} class="link-download">
                    Learn More <i class="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  }
}
