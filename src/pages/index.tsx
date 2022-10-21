import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Container, Box, Typography, Grid, Icon, Stack, Tooltip, IconButton, CardActions, CardContent, CardHeader, Card, Link, Button } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoToWebsiteIcon from '@mui/icons-material/OpenInBrowser';
import DocsIcon from '@mui/icons-material/MenuBook';
import PDFIcon from '@mui/icons-material/PictureAsPdf';
import PipIcon from '@mui/icons-material/ViewInAr';

// @ts-ignore
import OrcidIcon from '../images/orcid_logo.svg';
// @ts-ignore
import GoogleScholarIcon from '../images/google_scholar_logo.svg';
// @ts-ignore
import HalIcon from '../images/hal_logo.png';
// @ts-ignore
// import DblpIcon from '../images/dblp_logo.png';
// @ts-ignore
import RgIcon from '../images/researchgate_logo.svg' ;
// @ts-ignore
// import PythonIcon from '../images/python_icon.svg';
{/* <script src="https://code.iconify.design/iconify-icon/1.0.0/iconify-icon.min.js"></script> */}
// import SolidIcon from '../images/solid_logo.svg';

import CodeChip from '../components/CodeChip';
import { Title, Paragraph } from '../components/StyledComponents';
import { projects, courses, skills, skillsCategories } from '../data';
import Seo from '../components/layout/seo';
import LinkOut from "../components/LinkOut";
import ProfileButton from "../components/ProfileButton";
import { FC } from '../utils/types';
// import MyMarkdown from "../components/MyMarkdown";


const IndexPage: FC = () => {
  const theme = useTheme();

  const [state, setState] = React.useState({
    filterSkills: 'all',
    dialogOpen: false,
    project_license: '',
    language_autocomplete: [],
  });
  const stateRef = React.useRef(state);
  // Avoid conflict when async calls
  const updateState = React.useCallback((update) => {
    stateRef.current = {...stateRef.current, ...update};
    setState(stateRef.current);
  }, [setState]);

  return(
    <Container className='mainContainer'>
      <Seo title="Home" />

      {/* <Title>
        Online profiles
      </Title> */}

      <Card style={{display: 'inline-block', padding: theme.spacing(2)}}>
        <Stack direction={{xs: "column", md: "row"}} spacing={2} alignItems="center" justifyContent="center">
          <ProfileButton label='CV'
            tooltip='Curriculum Vitæ'
            href="/cv_carlos_utrilla-guerrero.pdf"
            color="error"
            icon={<PDFIcon />}
          />
          <ProfileButton label='carlosug'
            tooltip='GitHub profile'
            href="https://github.com/carlosug"
            color="warning"
            icon={<GitHubIcon />}
          />
          <ProfileButton label='carlos-utrilla-guerrero'
            tooltip='LinkedIn profile'
            href="https://www.linkedin.com/in/carlos-utrilla-guerrero-97ba7b31/"
            color="info"
            icon={<LinkedInIcon />}
          />
          <ProfileButton label='0000-0002-9994-1462'
            tooltip='ORCID profile'
            href="https://orcid.org/0000-0002-9994-1462"
            color="success"
            icon={<Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={OrcidIcon} />
            </Icon>}
          />
          {/* <ProfileButton label='Solid pod'
            tooltip='SOLID pod (Social Linked Data)'
            href="https://carlosug.solidcommunity.net/profile/#me"
            color="info"
            icon={<Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={SolidIcon} />
            </Icon>}
          /> */}
        </Stack>
      </Card>

      <Paragraph style={{marginTop: theme.spacing(3), textAlign: 'center'}}>
        Research data scientist working in Semantic Web standards (RDF, SPARQL, OWL ontologies, SHACL, RML), quantitative methods, and web technologies.
      </Paragraph>


      <Title>
        Publications
      </Title>

      <Card style={{display: 'inline-block', padding: theme.spacing(2)}}>
        <Stack direction={{xs: "column", md: "row"}} spacing={2} alignItems="center" justifyContent="center">
          <ProfileButton label='Google Scholar'
            tooltip='Publications on Google Scholar'
            href="https://scholar.google.com/citations?user=dpMY-4cAAAAJ&hl"
            color="warning"
            icon={<Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={GoogleScholarIcon} />
            </Icon>}
          />
          <ProfileButton label='Research Gate'
            tooltip='Publications on Research Gate'
            href='https://www.researchgate.net/profile/Carlos-Utrilla-Guerrero'
            color='yellow'
            icon={<Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={RgIcon} />
            </Icon>}
          />
        </Stack>
      </Card>


      <Title id='projects'>
        Latest research projects
      </Title>

      <Grid container spacing={2} alignItems="stretch">
        { projects.map((project: any, key: number) => (
          <Grid item xs={12} md={4}>
            <Card style={{display: 'inline-block', textAlign: 'left', height: '100%'}}>
              <CardHeader
                // avatar={<GitHubIcon />}
                title={project.title}
                titleTypographyProps={{variant: 'h6' }}
                // titleTypographyProps={{variant: 'subtitle1', style: {fontSize: '1.1rem'} }}
                subheader={<>
                  { project.langs.map((lang: any, key: number) => (
                    <CodeChip lang={lang} key={key}/>
                  ))}
                </>}
                style={{paddingBottom: '0px', textAlign: 'center'}}
              />
              <CardContent style={{paddingBottom: '0px', paddingTop: theme.spacing(1)}}>
                <Typography variant="body2">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing style={{display: 'block', paddingTop: '0px', textAlign: 'center'}}>
                { project.website_url &&
                  <Tooltip title='Go to the website'>
                    <a href={project.website_url} target='_blank'>
                      <IconButton aria-label="Go to website">
                        <GoToWebsiteIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
                { project.docs_url &&
                  <Tooltip title='Documentation'>
                    <a href={project.docs_url} target='_blank'>
                      <IconButton aria-label="Go to documentation">
                        <DocsIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
                { project.git_url &&
                  <Tooltip title='Source code on GitHub'>
                    <a href={project.git_url} target='_blank'>
                      <IconButton aria-label="GitHub link">
                        <GitHubIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
                { project.pip_url &&
                  <Tooltip title='Python library on PyPI'>
                    <a href={project.pip_url} target='_blank'>
                      <IconButton aria-label="Pip link">
                        <PipIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>


      <Title id='courses'>
        Teaching
      </Title>

      <Grid container spacing={2} alignItems="stretch">
        { courses.map((course: any, key: number) => (
          <Grid item xs={12} md={4}>
            <Card style={{display: 'inline-block', textAlign: 'left', height: '100%'}}>
              <CardHeader
                // avatar={<GitHubIcon />}
                title={course.title}
                titleTypographyProps={{variant: 'h6' }}
                // titleTypographyProps={{variant: 'subtitle1', style: {fontSize: '1.1rem'} }}
                subheader={<>
                  { course.langs.map((lang: any, key: number) => (
                    <CodeChip lang={lang} key={key}/>
                  ))}
                </>}
                style={{paddingBottom: '0px', textAlign: 'center'}}
              />
              <CardContent style={{paddingBottom: '0px', paddingTop: theme.spacing(1)}}>
                <Typography variant="body2">
                  {course.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing style={{display: 'block', paddingTop: '0px', textAlign: 'center'}}>
                { course.website_url &&
                  <Tooltip title='Go to the website'>
                    <a href={course.website_url} target='_blank'>
                      <IconButton aria-label="Go to website">
                        <GoToWebsiteIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
                { course.docs_url &&
                  <Tooltip title='Documentation'>
                    <a href={course.docs_url} target='_blank'>
                      <IconButton aria-label="Go to documentation">
                        <DocsIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
                { course.git_url &&
                  <Tooltip title='Source code on GitHub'>
                    <a href={course.git_url} target='_blank'>
                      <IconButton aria-label="GitHub link">
                        <GitHubIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
                { course.pip_url &&
                  <Tooltip title='Python library on PyPI'>
                    <a href={course.pip_url} target='_blank'>
                      <IconButton aria-label="Pip link">
                        <PipIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>


      <Title>
        About me
      </Title>

      <Paragraph>
        I now live in Maastricht, The Netherland and work in <LinkOut href="https://www.maastrichtuniversity.nl/p70069673">Maastricht University</LinkOut> at <LinkOut href="https://www.maastrichtuniversity.nl/p70069673">the Institute of Data Science</LinkOut> as research data scientist. 
        Recently I contributed to the <LinkOut href="https://maastrichtu-ids.github.io/dsri-documentation">Data Science Research Infrastructure Research Project</LinkOut>,
        an OpenShift cluster for academic researchers, and <LinkOut href="http://d2s.semanticscience.org">PLAYFAIR</LinkOut>,
        a framework to generate services from structured data using a semantically meaningful data model.
        I also built a RDF knowledge graph that integrates data from biomedical and other data sources,
        am involved in the Distributed Knowledge Graph effort of the <LinkOut href="https://cost-dkg.eu/">COST Action on Distributed Knowledge Graphs Project</LinkOut>,
        and contributed to advancing the <LinkOut href="https://biolink.github.io/biolink-model/docs/">Open Science Project</LinkOut>.
      </Paragraph>
      <Paragraph>
      I am a strong advocate of Open Source and commit myself to write comprehensible documentation and build easily accessible and reusable software. In my activities, I emphasize improving existing standards to address data interoperability and reproducibility and empowering researchers to improve their scientific practice.
      </Paragraph>
      <Paragraph>
      When not dealing with numbers or reading, I’m a happy uncle, a swimmer, a tennis player and, last but not least, a loving supporter of Real Zaragoza football team.
      </Paragraph>

      {/* <Paragraph>
        The aim of my work is to build data ecosystems that will enable scientific researchers
        to make new discoveries. As a data science developer at the Institute of Data Science
        at Maastricht University, I developed the <LinkOut href="https://maastrichtu-ids.github.io/dsri-documentation/">Data Science Research Infrastructure</LinkOut>,
        an OpenShift cluster for academic researchers, and <LinkOut href="http://d2s.semanticscience.org/">Data2Services</LinkOut>,
        a framework to generate services from structured data using a semantically meaningful data model.
        I also built a RDF knowledge graph that integrates data from biomedical and clinical data sources,
        was involved in the Knowledge Graph Standardization effort of the <LinkOut href="https://ncats.nih.gov/translator">NIH NCATS Translator project</LinkOut>,
        and contributed to advancing the <LinkOut href="https://biolink.github.io/biolink-model/docs/">BioLink model</LinkOut>.
        All these activities have been aimed at building an infrastructure for computationally-assisted exploration of knowledge and innovative research hypotheses.
      </Paragraph>
      <Paragraph>
        I first realized the data access challenges faced by researchers and medical practitioners while I worked on the <LinkOut href="http://bio2rdf.org/">Bio2RDF project</LinkOut> at Quebec University as part of a Master’s in Bioinformatics. I have since dedicated my career to building biomedical and clinical data resources and ensuring users' access to them. I am a strong advocate of Open Source and commit myself to write comprehensible documentation and build easily accessible and reusable software. In my activities, I emphasize improving existing standards to address data interoperability and reproducibility and empowering researchers to improve their scientific practice.
        Before taking my current position at the Institute of Data Science at UM, I worked as a research engineer at the LIRMM in Montpellier on projects to make the semantic web and ontologies more accessible to researchers, such as AgroPortal a portal for agronomical ontologies.
      </Paragraph>
      <Paragraph>
        Making new discoveries acts a great source of motivation for me. This curiosity also pushes me in other areas of my life. I practice a number of outdoor sports including mountain biking, bicycle tourism, Ultimate frisbee, hiking and trail running, and have travelled extensively across Europe and North America. It is perhaps for this reason that I have shown an ability to adapt quickly to new technologies and challenges with little outside help. Having said this, collaborative work within a team is something that I highly value and, indeed, am actively looking for.
      </Paragraph>
      <Paragraph>Feel free to contact me for more details.</Paragraph> */}


      <Title>
        Skills
      </Title>

      <Paragraph style={{textAlign: 'center'}}>
        The displayed scores are obviously subjective, please refer to my <LinkOut href="/cv_carlos_utrilla-guerrero.pdf">CV</LinkOut> for a better account of how those skills were used.
      </Paragraph>

      <Button variant="text" color="inherit" onClick={() => { updateState({ filterSkills: 'all'}) }} style={{textTransform: 'none'}}>
        💥 All
      </Button>
      { skillsCategories.map((cat: any, key: number) => (
        <Button variant="text" color={cat.color} style={{textTransform: 'none'}}
        onClick={() => { updateState({ filterSkills: cat.title}) }}>
          {cat.emoji} {cat.title}
        </Button>
      ))}

      <Grid container spacing={2} alignItems="stretch" style={{marginTop: theme.spacing(1)}}>
        { skills.map((skill: any, key: number) => {
          const cat: any = skillsCategories.filter(obj => { return obj.title === skill.category[0]; })[0]
          return (<>
            { (state.filterSkills == 'all' || skill.category.includes(state.filterSkills)) &&
            <Grid item xs={12} md={4}>
              <Card style={{textAlign: 'left', height: '100%', padding: theme.spacing(2)}}>
                <CardContent style={{padding: '0px'}}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* ##ch is the size of the largest skill name */}
                    <Typography variant="body2" style={{width: '20ch'}}>
                      {skill.title}
                    </Typography>
                    <Box sx={{ width: '100%', mr: 1 }}>
                      <LinearProgress variant="determinate"
                        value={skill.competency*20}
                        color={cat.color}
                      />
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                      <Typography variant="body2" color="text.secondary">{skill.competency}/5</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          }
        </>)}
        )}
      </Grid>

      {/* <MyMarkdown>
       Trying markdown
      </MyMarkdown> */}

      <Title>
        Contact me
      </Title>

      <Paragraph style={{textAlign: 'center'}}>
      I am always interested in hearing about and sharing new ideas, in both academic and business contexts.
      If you have a project or opportunity for collaboration you’d like to discuss, or if you just want a friendly chat, feel free to drop me a line at: <p><LinkOut href="c.utrilla.guerrero@gmail.com">📩 c.utrilla.guerrero@gmail.com</LinkOut></p>
      </Paragraph>

    </Container>
  )
}
export default IndexPage;