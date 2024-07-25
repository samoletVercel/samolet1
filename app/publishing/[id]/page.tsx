import styles from "./page.module.scss";
import variables from "@/app/variables.module.scss";
import type { Metadata } from "next";
import React from "react";
import { swift } from "@/app/fonts";
import Image from "next/image";
import AnimatedLine from "@/app/components/animations/AnimatedLine/AnimatedLine";

import getPostId from "@/app/lib/getPostId";
import { constants } from "buffer";

const PublishingProjectPage = async ({ params }: { params: { id: number } }) => {
  const project = await getPostId(params.id)

  const preview = project.post.preview

  //console.log(preview)

  const blocks = []

  for (let i = 8; i < project.post.content.length; i+=2) {

    switch (project.post.content[i].blockName) {
      case 'my-blocks/image-block':

        if (project.post.content[i].attrs.type === "image") {
          blocks.push(<div key={project.post.content[i].attrs.src} className={styles.singleImage}><Image src={project.post.content[i].attrs.src} fill alt="2" /></div>)
        } else {
          blocks.push(<div key={project.post.content[i].attrs.src} className={styles.singleImage}><video width="680" height="400" autoPlay muted preload="none">
          <source src={project.post.content[i].attrs.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video></div>)
        }
        break

      case 'my-blocks/two-cols':
        const innerBlocks: any = [];
        project.post.content[i].innerBlocks.forEach((el: { innerBlocks: any; }) => {
          if (el.innerBlocks[0].blockName == 'my-blocks/image-block') {
            if (el.innerBlocks[0].attrs.type === "image") {
              innerBlocks.push(<div key={Math.random()}><Image src={el.innerBlocks[0].attrs.src} fill alt="2" /></div>)
            } else {
              innerBlocks.push(<div key={Math.random()}><video width="680" height="400" autoPlay muted preload="none">
              <source src={el.innerBlocks[0].attrs.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video></div>)
            }
          } else {
            innerBlocks.push(<p key={el.innerBlocks[0].attrs.text} className={`${variables.textMain}`} dangerouslySetInnerHTML={{ __html: el.innerBlocks[0].attrs.text}}></p>)
          }
        });
        blocks.push(<div key={Math.random()} className={styles.twoColumns}>{innerBlocks}</div>)
        break

      case 'my-blocks/text-area-block':
        blocks.push(<div key={Math.random()} className={variables.textMain} dangerouslySetInnerHTML={{ __html: project.post.content[i].attrs.text}}></div>)
        break

      default:
        break;
    }
  }


  return (
    <main className={variables.container}>
      <div className={styles.titleContainer}>
          <h1 className={`${variables.textSubtitle} ${swift.className}`}>
            {project.post.title}
          </h1>

        <div>
          <p className={variables.textMain}>{project.post.content[2].attrs.text}</p>
        </div>
      </div>

      <div className={styles.preview}>
          {preview.type === "image" ? 
            <Image src={preview.src} alt={project.post.title} fill /> : 
            <video width="680" height="400" autoPlay muted preload="none">
              <source src={preview.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          }
      </div>

      <div className={`${styles.tags} ${variables.textMain}`}>
        {project.post.content[4].attrs.items.map((el: { title: string; content: string; }) => {
              return(  <div className={styles.tag} key={el.title}>
                    <h4>{el.title}</h4>
                    <p dangerouslySetInnerHTML={{ __html: el.content}}></p>
                </div>)
        }
        )}
      </div>

      <div style={{ marginTop: "4rem" }} />
      <AnimatedLine wide={false} />
      <div className={styles.description}>
        <p className={variables.textMain}>
          {project.post.content[6].attrs.text}
        </p>
      </div>  
      <div style={{marginTop: '10rem'}}/>
      {blocks}
    </main>
  );;
};
export default PublishingProjectPage;
