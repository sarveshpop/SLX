import React, { useContext } from "react";
import { AuthContext } from "../../contextStore/AuthContext";
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Profile() {
     const [value, setValue] = React.useState(0);
     const { user } = useContext(AuthContext);
     
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 100,
    width: '100%',
    backgroundColor: '#cfcccc',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
      fontWeight: '600',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(255, 255, 255, 0.32)',
    },
  }),
);

    return (
        <div className='containerProfile pt-2 glass'>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <StyledTab label="Your Profile" {...a11yProps(0)} />
                        <StyledTab label="Your Orders" {...a11yProps(1)} />
                        <StyledTab label="Your Listings" {...a11yProps(2)} />
                    </StyledTabs>
                </Box>
                <TabPanel value={value} index={0}>
                        <br/>
                        {user ? 
                        <>
                        <h3>Profile Details</h3>
                        <hr />
                        <br />
                        <p className="fs-5 fw-bold">Name: <span className="fw-normal pl-2">{user.displayName}</span></p>
                        <p className="fs-5 fw-bold">E-mail Address: <span className="fw-normal pl-2">{user.email}</span></p>
                        <p className="fs-5 fw-bold">Phone Number: <span className=" fw-normal pl-2">{user.phone}</span></p>
                        </>
                         : <span> Login or Signup first</span>}

                    
                </TabPanel>
                <TabPanel value={value} index={1}>
                <br/>
                <h3>Recent Orders</h3>
                        <hr />
                        <br />

                </TabPanel>
                <TabPanel value={value} index={2}>
                <br/>
                <h3>Recent Listings</h3>
                        <hr />
                        <br />

                </TabPanel>
            </Box>
        </div>
    )
}

export default Profile;
