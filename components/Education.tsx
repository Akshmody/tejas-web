import { Box, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";

type EducationDetailsType = {
    programType: string,
    programName: string,
    instituteName: string,
    startYear: string,
    endYear: string,
    instituteLocation: string
}
const EDUCATION_DETAILS: EducationDetailsType[] = [
    {
        programType: 'Postgratuate Certificate',
        programName: 'Data Analysis for Business Decision Making',
        instituteName: 'Durham College',
        startYear: 'May 2022',
        endYear: 'Dec 2022',
        instituteLocation: 'Oshawa, Ontario'
    },
    {
        programType: 'Postgratuate Certificate',
        programName: 'Artificial Intelligence Analysis, Design and Implementation',
        instituteName: 'Durham College',
        startYear: 'Sep 2021',
        endYear: 'Apr 2022',
        instituteLocation: 'Oshawa, Ontario'
    },
    {
        programType: 'Bachelor of Technology',
        programName: 'Information technology',
        instituteName: 'Indus University',
        startYear: 'Aug 2016',
        endYear: 'May 2020',
        instituteLocation: 'Ahmedabad, Gujarat, India'
    }
]

const EducationCard = ({ education }: { education: EducationDetailsType }) => {
    return (
        <Box
            display="block"
            width="100%"
            borderRadius="lg"
            padding="1.5rem"
        >
            <Flex width="100%" align="flex-start" justifyContent="space-between" flexDirection="column">
                <Stack direction="row" align="center" style={{ width: "100%" }} justify="space-between">
                    <Heading letterSpacing="wide" size="md" as="h3">
                        {education.programType} - {education.programName}
                    </Heading>
                </Stack>
                <Stack mt={'1rem'} justifyContent={'space-between'} alignItems='start' direction={'row'} width='100%'>
                    <VStack alignItems={'flex-start'}>
                        <Text fontSize="md" variant="solid" colorScheme="teal">
                            {education.instituteName}
                        </Text>
                        <Text fontSize="md" colorScheme="teal">
                            {education.instituteLocation}
                        </Text>
                    </VStack>
                    <Text mt="1rem" fontSize="md" variant="solid" colorScheme="teal">
                        ({education.startYear} - {education.endYear})
                    </Text>
                </Stack>
                {/*
                {tags && (
                    <Stack direction="row" mt="1rem">
                        {tags?.map((tag: string) => (
                            <Tag key={tag} size="sm">
                                {tag}
                            </Tag>
                        ))}
                    </Stack>
                )} */}
            </Flex>
        </Box>
    );
};

const EducationDetails = () => {
    return <>
        {EDUCATION_DETAILS.map((education) => (
            <EducationCard education={education} />
        ))}
    </>
}
export default EducationDetails;
