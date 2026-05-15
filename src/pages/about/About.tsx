import style from "./About.module.css";

export default function About() {
  return (
    <section id={style.about}>
      <div className={style.about__header}>
        <h2>About</h2>
        <hr />
      </div>
      <div>
        <h3>Summary</h3>
        <p>
          By utilizing a public clinical dataset from{" "}
          <a
            href="https://www.kaggle.com/datasets/andrewmvd/early-diabetes-classification"
            target="_blank"
          >
            Kaggle
          </a>
          , implementing rigorous data engineering preprocessing pipelines, and
          deploying the final model via an entirely{" "}
          <strong>serverless AWS infrastructure</strong>, this application
          delivers real-time, low-latency predictions with zero infrastructure
          overhead costs when idle.
        </p>
      </div>
      <div>
        <h3>Dataset and Clinical Context</h3>
        <p>
          The foundational backbone of this predictive system is the{" "}
          <strong>Early Stage Diabetes Risk Prediction Dataset</strong>, sourced
          from the{" "}
          <a
            href="https://www.kaggle.com/datasets/andrewmvd/early-diabetes-classification"
            target="_blank"
          >
            Kaggle
          </a>{" "}
          repository. The dataset contains clinical signs and symptoms collected
          from patients who have either been diagnosed as diabetic or are
          presenting pre-diabetic risk factors.
        </p>
        <div>
          <h4>Feature Inventory</h4>
          <p>
            The model evaluates a comprehensive suite of dempographic data and
            symptoms:
          </p>
          <ul>
            <li>
              <p>
                <strong>Age:</strong> numerical baseline ranging from
                symptomatic youth to high-risk older demographics.
              </p>
            </li>
            <li>
              <p>
                <strong>Polyuria:</strong> excessive urination, a primary
                indicator of high blood glucose levels.
              </p>
            </li>
            <li>
              <p>
                <strong>Polydipsia:</strong> excessive thirst, resulting from
                systemic dehydration caused by polyuria.
              </p>
            </li>
            <li>
              <p>
                <strong>Sudden Weight Loss:</strong> rapid depletion of muscle
                and fat stores due to cellular starvation.
              </p>
            </li>
            <li>
              <p>
                <strong>Weakness:</strong> systemic fatigue caused by the body's
                inability to metabolize glucose efficiently.
              </p>
            </li>
            <li>
              <p>
                <strong>Polyphasia:</strong> increased appetite or excessive
                hunger.
              </p>
            </li>
            <li>
              <p>
                <strong>Genital Thrush:</strong> fungal infections associated
                with elevated glucose in bodily fluids.
              </p>
            </li>
            <li>
              <p>
                <strong>Visual Blurring:</strong>
                temporary distortion of eye lenses due to high blood sugar.
              </p>
            </li>
            <li>
              <p>
                <strong>Itching:</strong> generalized pruritus linked to poor
                peripheral circulation and dry skin.
              </p>
            </li>
            <li>
              <p>
                <strong>Delayed Healing:</strong> impaired immune response and
                vascular degradation delaying wound recovery.
              </p>
            </li>
            <li>
              <p>
                <strong>Partial Parensis:</strong> Muscle weakness resulting
                from diabetic neuropathy.
              </p>
            </li>
            <li>
              <p>
                <strong>Muscle Stiffness:</strong> systemic joint and muscular
                rigidity.
              </p>
            </li>
            <li>
              <p>
                <strong>Alopecia:</strong> sudden hair loss linked to endocrine
                imbalances.
              </p>
            </li>
            <li>
              <p>
                <strong>Obesity:</strong> Body Mass Index (BMI) indicators
                correlating heavily with insulin resistance.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3>About the model</h3>
        <p>
          The <code>RandomForestClassifier</code> emerged as the optimal model,
          demonstrating superior metrics across <strong>Accuracy</strong>,{" "}
          <strong>Precision</strong>, <strong>Recall</strong>, and{" "}
          <strong>F1-Score</strong>. The ensemble nature of Random Forest makes
          it exceptionally resilient to the noisy clinical variances found in
          patient symptom reporting. The final, optimized end-to-end pipeline
          was saved as <code>diabetes_model.joblib</code>.
        </p>
        <div>
          <h4>Serverless Cloud Infrastructure on AWS</h4>
          <p>
            To host this model cost-effectively without managing continuous
            virtual machines, the entire inference engine was designed around a{" "}
            <strong>Serverless Architecture on Amazon Web Services</strong> (
            <a
              href="https://aws.amazon.com/pt/free/?trk=4f374c9d-ac11-490d-8b23-82df6d4e054b&sc_channel=ps&trk=4f374c9d-ac11-490d-8b23-82df6d4e054b&sc_channel=ps&ef_id=Cj0KCQjwiJvQBhCYARIsAMjts3Ihzx82Wm33e-d05WRh7novQqDCOUTIBW-jtg7Os5A3apSCXBoefVIaAtjSEALw_wcB:G:s&s_kwcid=AL!4422!3!795841170154!e!!g!!aws!23528572733!191423953134&gad_campaignid=23528572733&gbraid=0AAAAADjHtp-JiJM_hnvAOlwZmxOmDfeB1&gclid=Cj0KCQjwiJvQBhCYARIsAMjts3Ihzx82Wm33e-d05WRh7novQqDCOUTIBW-jtg7Os5A3apSCXBoefVIaAtjSEALw_wcB"
              target="_blank"
            >
              AWS
            </a>
            ).
          </p>
        </div>
        <div>
          <h4>Production API Gateway Integration</h4>
          <p>
            An Amazon <strong>API Gateway</strong> was configured as a REST API
            layer to act as the secure, public portal to the underlying Lambda
            inference function. This was possible because of a HTTP POST Method
            dedicated to the endpoint <code>/predict</code>, protected by{" "}
            <strong>CORS</strong>.
          </p>
        </div>
      </div>
      <div>
        <h3>Frontend configuration</h3>
        <div>
          <h4>Architeture: React, Vite and Typescript</h4>
          <p>
            The client-facing layer is an intuitive, modern single-page
            application built using the <strong>React</strong> ecosystem,
            scaffolded with <strong>Vite</strong> for optimized build times, and
            enforced with strict <strong>TypeScript</strong> typings.
          </p>
        </div>
        <div>
          <h4>Cloud Deployment</h4>
          <p>
            The final production build of the frontend was bundled into a{" "}
            <code>/dist</code> folder and save it in{" "}
            <strong>Amazon S3 Static Website Hosting</strong>.
          </p>
          <p>
            By decoupling the frontend hosting (<strong>S3</strong>) from the
            compute engine (<strong>Lambda</strong>), the entire platform scales
            automatically from a few users to millions of concurrent requests
            without configuring auto-scaling groups, load balancers, or patching
            underlying OS kernels.
          </p>
        </div>
      </div>
      <div>
        <h3>Conclusion</h3>
        <p>
          By treating preprocessing, model selection, infrastructure
          optimization, and frontend design as a unified, cohesive delivery
          pipeline, this application serves as a benchmark for deploying
          high-performance, cost-effective, and secure healthcare analytics
          tools on the modern cloud.
        </p>
      </div>
    </section>
  );
}
