import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";
import { getReviewClassification } from "../utils/ui";

@inject("store")
@observer
export default class Home extends Component {
  state = {
    review: ""
  };
  render() {
    const { ui } = this.props.store;

    return (
      <Fragment>
        <div className="hero">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-one-third">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img
                          src="http://bulma.io/images/placeholders/1280x960.png"
                          alt="Image"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48">
                            <img
                              src="http://bulma.io/images/placeholders/96x96.png"
                              alt="Image"
                            />
                          </figure>
                        </div>
                        <div className="media-content">
                          <p className="title is-4">Redmi Note 5 PRO</p>
                          <p className="subtitle is-6">REDMI</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-two-third">
                  <div className="field">
                    <label className="label">Add Review</label>
                    <p className="control">
                      <textarea
                        className="textarea"
                        placeholder="Textarea"
                        onChange={event => {
                          this.setState({ review: event.target.value });
                        }}
                      />
                    </p>
                  </div>
                  <a
                    className="button is-primary is-fullwidth"
                    onClick={event =>
                      getReviewClassification(
                        this.props.store,
                        this.state.review
                      )
                    }
                  >
                    Add Review
                  </a>
                  <div className="box">
                    <div className="title">
                      Last Review: {ui.classification}
                    </div>
                    <div className="subtitle">{ui.lastReview}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
